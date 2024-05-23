SECRET_KEY = 'blablabla'

SQLALCHEMY_DATABASE_URI = \
    '{SGBD}://{usuario}:{senha}@{servidor}/{database}'.format(
        SGBD = 'mysql+mysqlconnector',
        usuario = 'root',
        senha = '96352737',
        servidor = 'localhost',
        database = 'gamestand'
)