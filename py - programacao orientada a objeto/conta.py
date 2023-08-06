class ContaCorrente:

    # Constructor
        # Self = Endereço na memória
        # Para fazer um private, basta digitar "__" antes do atributo, ficando __numero 
    def __init__(self, numero, titular, saldo, limite=1000.0):
        print("Contructor")
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite
        #   pass

    def extrato(self):
        print("Saldo de {}: {}".format(self.__titular, self.__saldo))
        
    def deposita(self, valor):
        saldo = self.get_saldo()
        saldo += valor
        self.set_saldo(saldo)

    def __pode_sacar(self, valor_saque):
        valor_disponivel = self.__saldo + self.__limite
        return valor_saque < valor_disponivel

    def saca(self, valor):
        if self.__pode_sacar(valor):
            self.saldo -= valor
        else:
            print("O valor passado está além do limite disponível.")

    def transfere(self, valor, conta_destino):
        self.saca(valor)
        conta_destino.deposita(valor)

    @property
    def limite(self):
        return self.__limite
    
    @limite.setter
    def limite(self, limite):
        self.__limite = limite  

    @property
    def saldo(self):
        return self.__saldo

    @saldo.setter
    def saldo(self, saldo):
        self.__saldo = saldo
        
    @property
    def titular(self):
        return self.__titular
    
    @titular.setter
    def titular(self, titular):
        self.__titular = titular

    @staticmethod # Método Estático, é chamado assim que a classe é criada
    def codigos_bancos():
        return {"BB": "001", "Caixa": "104", "Bradesco": "237"}
