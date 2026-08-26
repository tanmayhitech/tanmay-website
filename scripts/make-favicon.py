import struct

def create_ico(filename):
    width = 32
    height = 32
    bpp = 32

    # RGBA Pixel Data (32x32)
    pixels = []
    for y in range(height):
        for x in range(width):
            # Background dark obsidian #090d16
            r, g, b, a = 9, 13, 22, 255

            # Draw rounded corners
            dx = min(x, width - 1 - x)
            dy = min(y, height - 1 - y)
            if dx < 4 and dy < 4 and (dx - 4)**2 + (dy - 4)**2 > 16:
                r, g, b, a = 0, 0, 0, 0

            # Draw Monogram 'T' (White)
            # Horizontal bar
            if 7 <= y <= 11 and 7 <= x <= 22:
                r, g, b, a = 255, 255, 255, 255
            # Vertical stem
            if 11 <= y <= 24 and 12 <= x <= 16:
                r, g, b, a = 255, 255, 255, 255

            # Draw Emerald Accent Dot (#10b981)
            dist_sq = (x - 23)**2 + (y - 21)**2
            if dist_sq <= 9:
                r, g, b, a = 16, 185, 129, 255

            # BMP stores pixels as BGRA bottom-up
            pixels.append((b, g, r, a))

    # Reverse rows for bottom-up BMP
    bmp_pixels = []
    for row in range(height - 1, -1, -1):
        for col in range(width):
            bmp_pixels.append(pixels[row * width + col])

    pixel_bytes = bytearray()
    for b, g, r, a in bmp_pixels:
        pixel_bytes.extend([b, g, r, a])

    # AND mask (1 bit per pixel, padded to 32 bits per row) = 32 * 32 / 8 = 128 bytes
    and_mask = bytearray(128)

    # BITMAPINFOHEADER (40 bytes)
    bih = struct.pack('<IiiHHIIiiII',
                        40,             # biSize
                        width,          # biWidth
                        height * 2,     # biHeight (double height for XOR + AND mask)
                        1,              # biPlanes
                        bpp,            # biBitCount
                        0,              # biCompression (BI_RGB)
                        len(pixel_bytes) + len(and_mask), # biSizeImage
                        0,              # biXPelsPerMeter
                        0,              # biYPelsPerMeter
                        0,              # biClrUsed
                        0)              # biClrImportant

    image_data = bih + pixel_bytes + and_mask

    # ICONDIR (6 bytes) + ICONDIRENTRY (16 bytes)
    icondir = struct.pack('<HHH', 0, 1, 1)
    entry = struct.pack('<BBBBHHII',
                        width,
                        height,
                        0,             # color count
                        0,             # reserved
                        1,             # planes
                        bpp,           # bpp
                        len(image_data),
                        6 + 16)        # data offset

    with open(filename, 'wb') as f:
        f.write(icondir + entry + image_data)

    print(f"Successfully generated favicon: {filename} ({width}x{height})")

if __name__ == '__main__':
    create_ico('favicon.ico')
