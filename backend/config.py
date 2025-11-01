import os
# řeším situaci kdy bez .env se program připojuje k mock dtb a s envem k lokální dtb v síti
try:
    from dotenv import load_dotenv, find_dotenv
    load_dotenv(find_dotenv(), override=False)
except Exception:
    pass

MOCK_DB_URL = "mysql+pymysql://sql7805590:IJbGCxCLJf@sql7.freesqldatabase.com:3306/sql7805590?charset=utf8mb4"

def _env_nonempty(name: str, default: str) -> str:
    val = os.getenv(name)
    return val if val and val.strip() else default

class Settings:
    SQLALCHEMY_DATABASE_URI = _env_nonempty("DATABASE_URL", MOCK_DB_URL)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ENGINE_OPTIONS = {"pool_pre_ping": True, "pool_recycle": 280}