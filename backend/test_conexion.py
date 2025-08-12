import sqlalchemy

# ✅ Esta es la conexión correcta con escape doble para el backslash
conexion = (
    "mssql+pyodbc://sa:H3ctorDB2025!@localhost\\SQLEXPRESS/driverown?"
    "driver=ODBC+Driver+17+for+SQL+Server"
)

try:
    engine = sqlalchemy.create_engine(conexion)
    with engine.connect() as conn:
        result = conn.execute(sqlalchemy.text("SELECT 1"))
        print("✅ Conexión exitosa a SQL Server")
except Exception as e:
    print("❌ Error en la conexión:")
    print(e)
