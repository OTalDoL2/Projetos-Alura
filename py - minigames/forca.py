import random



def jogar():
    
    imprime_mensagem_inicial()
    palavra_secreta = define_palavra_secreta()
    letras_encontradas = inicializa_campo_de_letras(palavra_secreta)

    enforcado = False
    acertou = False
    tentativas = 7

    print(letras_encontradas)

    while (not enforcado and not acertou):
        chute = solicita_chute()

        if chute in palavra_secreta:
            registra_letra_encontrada(chute, letras_encontradas, palavra_secreta)
        else:
            desenha_forca(tentativas)
            tentativas = tentativas - 1
        
        # Enfocado receberá o valor true quando o valor de tentativas for 0
        enforcado = tentativas == 0
        acertou = not "_" in letras_encontradas
        # if not "_" in letras_encontradas:
        # print("Parabéns, você acertou!")
        # acertou = True
        print("Palavra: ", str(letras_encontradas))    
    
    if acertou:
        imprime_mensagem_vencedor()
    else:
        imprime_mensagem_perdedor(palavra_secreta)
    


    print("Fim do Jogo\n")

def registra_letra_encontrada(chute, letras_encontradas, palavra_secreta):
    posicao = 0
    for letra in palavra_secreta:
        if chute == letra:
            letras_encontradas[posicao] = letra
        posicao = posicao + 1


def imprime_mensagem_perdedor(palavra_secreta):
    print("Puxa, você foi enforcado!")
    print("A palavra era {}".format(palavra_secreta))
    print("    _______________         ")
    print("   /               \       ")
    print("  /                 \      ")
    print("//                   \/\  ")
    print("\|   XXXX     XXXX   | /   ")
    print(" |   XXXX     XXXX   |/     ")
    print(" |   XXX       XXX   |      ")
    print(" |                   |      ")
    print(" \__      XXX      __/     ")
    print("   |\     XXX     /|       ")
    print("   | |           | |        ")
    print("   | I I I I I I I |        ")
    print("   |  I I I I I I  |        ")
    print("   \_             _/       ")
    print("     \_         _/         ")
    print("       \_______/           ")

def imprime_mensagem_vencedor():
    print("Parabéns, você ganhou!")
    print("       ___________      ")
    print("      '._==_==_=_.'     ")
    print("      .-\\:      /-.    ")
    print("     | (|:.     |) |    ")
    print("      '-|:.     |-'     ")
    print("        \\::.    /      ")
    print("         '::. .'        ")
    print("           ) (          ")
    print("         _.' '._        ")
    print("        '-------'       ")

def desenha_forca(erros):
    print("  _______     ")
    print(" |/      |    ")

    if(erros == 7):
        print(" |      (_)   ")
        print(" |            ")
        print(" |            ")
        print(" |            ")

    if(erros == 6):
        print(" |      (_)   ")
        print(" |      \     ")
        print(" |            ")
        print(" |            ")

    if(erros == 5):
        print(" |      (_)   ")
        print(" |      \|    ")
        print(" |            ")
        print(" |            ")

    if(erros == 4):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |            ")
        print(" |            ")

    if(erros == 3):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |            ")

    if(erros == 2):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      /     ")

    if (erros == 1):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      / \   ")

    print(" |            ")
    print("_|___         ")
    print()


def solicita_chute():
    chute = input("Digite uma letra: ")
    chute = chute.upper().strip()
    return chute

def imprime_mensagem_inicial():
    print("\n\n==============")
    print("Bem vindo ao Jogo da Forca")
    print("==============\n")

def define_palavra_secreta():
    palavras = []

    with open("palavras.txt", "r") as arquivo:
        for linha in arquivo:
            print(linha)
            linha = linha.strip().upper()
            palavras.append(linha)
    
    palavra_secreta = palavras[random.randrange(0, len(palavras))]
    return palavra_secreta

def inicializa_campo_de_letras(palavra_secreta):
    return ["_" for letra in palavra_secreta]

if __name__ == "__main__":
    jogar()