# Základní Python image
FROM python:3.10

# Nastavení pracovního adresáře
WORKDIR /app

# Kopírování požadavků
COPY requirements.txt .

# Instalace závislostí
RUN pip install --no-cache-dir -r requirements.txt

# Kopírování aplikace
COPY . .

# Expozice portu pro Flask
EXPOSE 5000

# Příkaz pro spuštění aplikace
CMD ["python", "app.py"]
