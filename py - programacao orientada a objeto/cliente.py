class Cliente:

    def __init__(self, nome):
        self.__nome = nome 
    
    @property # O Property permite que a função seja chamada sem o uso do parênteses, funciona como Get
    def nome(self):
        return self.__nome.title()
    
    @nome.setter
    def nome(self, nome):
        self.__nome = nome