#!/bin/bash

echo "Setting up FSM PDF Generator Service..."

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate

# Upgrade pip
pip install --upgrade pip

# Install requirements
pip install -r requirements.txt

# Install Playwright browsers
playwright install chromium

echo "Setup complete!"
echo ""
echo "To start the service:"
echo "1. Activate the virtual environment: source venv/bin/activate"
echo "2. Run the service: python main.py"
echo ""
echo "The service will be available at: http://localhost:8000"
echo "API documentation will be available at: http://localhost:8000/docs"