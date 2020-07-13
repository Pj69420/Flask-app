from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return redirect(url_for('projects'))


@app.route('/projects')
def projects():
    return render_template("projects.html")


@app.route('/tictactoe')
def tictactoe():
    return render_template("tictactoe.html")


@app.route('/rockpaperscissors')
def rockpaperscissors():
    return render_template("rockpaperscissors.html")


@app.route('/about')
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.debug = True
    app.run()
