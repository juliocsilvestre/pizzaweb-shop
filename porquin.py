from PIL import Image, ImageDraw

# Caminho para a imagem do porquinho
base_image_path = "Porquinho-azul.png"

# Carrega e redimensiona a imagem base
base_image = Image.open(base_image_path).convert("RGBA").resize((200, 200))

# Parâmetros da moeda
coin_radius = 20
coin_color = (255, 204, 0, 255)
coin_x = 90
coin_start_y = -30
coin_end_y = 70
num_frames = 10

# Gera os frames
frames = []
for i in range(num_frames):
    frame = base_image.copy()
    draw = ImageDraw.Draw(frame)
    y = int(coin_start_y + (coin_end_y - coin_start_y) * (i / num_frames))
    bbox = [coin_x, y, coin_x + coin_radius, y + coin_radius]
    draw.ellipse(bbox, fill=coin_color)
    frames.append(frame)

# Espelha os frames para o loop
frames += list(reversed(frames))

# Salva como GIF
frames[0].save(
    "piggy_bank_loading.gif",
    save_all=True,
    append_images=frames[1:],
    duration=60,
    loop=0,
    disposal=2,
    transparency=0
)
print("GIF gerado como 'piggy_bank_loading.gif'")
