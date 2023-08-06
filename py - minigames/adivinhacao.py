import random

def jogar():
    print("\n\n==============")
    print("Bem vindo ao Jogo da Advinhação")
    print("==============\n")

    numero_secreto = 0
    total_tentativas = 0
    pontos = 100


    print("Qual o nível de dificuldade você deseja?")
    print("1 - Fácil", "2 = Médio", "3 - Difícil", sep="\n")

    nivel = int(input("Eu desejo o nível: "))

    if nivel == 1:
        total_tentativas = 3
        numero_secreto = round(random.randrange(1, 11))
    elif nivel == 2:
        total_tentativas = 5
        numero_secreto = round(random.randrange(1, 31))
    else:
        total_tentativas = 5
        numero_secreto = round(random.randrange(1, 101))

    print("Numero n tao secreto ", numero_secreto)


    for rodada in range(1,total_tentativas + 1):
    # while(rodada <= total_tentativas):
        print("Tentativa {} de {}".format(rodada, total_tentativas))
        chute = int(input("Digite um número entre 1 e 100: "))
        print("Você digitou", chute, sep=" ", end=".\n")

        if chute < 1 or chute > 100:
            print("Você deve digitar um número entre 1 e 100...")
            continue
        
        acertou = chute == numero_secreto
        maior = chute > numero_secreto
        menor = chute < numero_secreto

        if acertou:
            print(f"Você acertou e fez {pontos} pontos!")
            break
        else:
            if maior:
                print("Você Errou! O seu chute foi maior do que o número secreto.\n")
            elif menor:
                print("Você Errou! O seu chute foi menor do que o número secreto.\n")
            pontos_perdidos = abs(numero_secreto - chute)
            pontos = pontos - pontos_perdidos

    print("Fim do Jogo\n")

if __name__ == "__main__":
    jogar()