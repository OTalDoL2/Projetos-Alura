import forca
import adivinhacao

print("\n\n*************")
print("Escolha o seu jogo!")
print("*************\n")

print("1- Forca", "2  - Adivinhação", sep="\n")
jogo = int(input(""))

if jogo == 1:
    print("Jogando forca...")
    forca.jogar()
if jogo == 2:
    print("Jogando Adivinhação...")
    adivinhacao.jogar()