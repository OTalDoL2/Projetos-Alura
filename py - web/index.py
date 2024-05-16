from flask import Flask, render_template, request
from Jogo import Jogo
app = Flask(__name__)

@app.route('/')
def teste():
    jogo1= Jogo('Skyrim', 'RPG', 'PC')
    jogo2= Jogo('Tetris', 'Puzzle', 'Atari')
    jogo3= Jogo('God of War', 'Rack n Slash', 'PS2')
    lista_jogos = [jogo1, jogo2, jogo3]
    return render_template('index.html', jogos=lista_jogos)

@app.route('/novo')
def novo():
    nome = request.form('nome')
    categoria = request.form('categoria')
    console = request.form('console')
    jogo = Jogo(nome, categoria, console)
    lista_jogos.append(jogo)
    return render_template('index.html', jogos=lista_jogos)

app.run(debug=True)