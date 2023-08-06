print("\n\n==============")
print("Bem vindo ao Jogo da Advinhação")
print("==============\n")

numero_secreto = 63
total_tentativas = 3
rodada = 1

while(rodada <= total_tentativas):
    print("Tentativa {} de {}".format(rodada, total_tentativas))
    chute = int(input("Digite o seu número: "))
    print("Você digitou", chute, sep=" ", end=".\n")

    
    acertou = chute == numero_secreto
    maior = chute > numero_secreto
    menor = chute < numero_secreto

    if acertou:
        print("Você acertou!")
        rodada = total_tentativas + 1
    else:
        if chute > numero_secreto:
            print("Você Errou! O seu chute foi maior do que o número secreto.\n")
        if chute < numero_secreto:
            print("Você Errou! O seu chute foi menor do que o número secreto.\n")
    rodada = rodada + 1

print("Fim do Jogo\n")