from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash


from models import db, Usuario 

app = Flask(__name__)
CORS(app)

# ✅ Conexión a SQL Server (reemplaza si cambia)
conexion = (
    "mssql+pyodbc://sa:H3ctorDB2025!@localhost\\SQLEXPRESS/driverown?"
    "driver=ODBC+Driver+17+for+SQL+Server"
)
app.config['SQLALCHEMY_DATABASE_URI'] = conexion
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ✅ Modelo de tabla
class Usuario(db.Model):
    __tablename__ = 'Usuario'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(1024), nullable=False)  # hash largo

# ✅ Registro seguro
@app.route('/api/registro', methods=['POST'])
def registro():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
            return jsonify({'mensaje': 'Faltan datos'}), 400

    if Usuario.query.filter_by(username=username).first():
        return jsonify({'mensaje': 'El usuario ya existe'}), 400

    hashed_password = generate_password_hash(password)

    nuevo_usuario = Usuario(username=username, password=hashed_password)
    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify({'mensaje': 'Usuario registrado correctamente'})

# ✅ Login seguro
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    usuario = Usuario.query.filter_by(username=username).first()

    if usuario and check_password_hash(usuario.password, password):
        return jsonify({'mensaje': 'Login exitoso'})
    else:
        return jsonify({'mensaje': 'Credenciales inválidas'}), 401

if __name__ == '__main__':
    with app.app_context():
         db.create_all()
    app.run(debug=True)
