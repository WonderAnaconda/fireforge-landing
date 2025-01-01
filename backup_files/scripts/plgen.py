import matplotlib.pyplot as plt
import numpy as np
import os

# Set plot style
plt.style.use('dark_background')
plt.rcParams['axes.facecolor'] = 'black'
plt.rcParams['grid.color'] = 'darkgrey'
plt.rcParams['grid.linestyle'] = '--'
plt.rcParams['grid.alpha'] = 0.3

# Define the underlying price range and strike prices for the strategies
underlying_price = np.linspace(50, 150, 500)
k1, k2, k3, k4 = 95, 105, 115, 125

# Realistic P/L functionsdef iron_condor(price):
def iron_condor(price):
    pl = np.minimum(np.maximum(price - k3, 0), k4 - k3) - np.minimum(np.maximum(price - k1, 0), k2 - k1)
    return -pl - 5  # Adjust for credit received

def bull_put_spread(price):
    # Bullish position, profit if above k2; limited loss if below k1
    return np.minimum(np.maximum(price-5 - k1, 0), k2 - k1) - 5

def iron_butterfly(price):
    # Sharp peak at k3, profit zone around it; loss if far from k3
    return -(np.minimum(np.maximum(price - 105, 0), k3 - 105) - np.minimum(np.maximum(price - k1, 0), k4 - k3) + 5)

def iron_lizard(price):
    # Profit to one side (unlimited) and limited loss on the other
    return np.maximum(price - k2, 0) - np.minimum(np.maximum(price - k1, 0), k3 - k1) + 5

def long_straddle(price):
    # Unlimited profit on both sides; max loss near strike (k3)
    return np.maximum(price - 105, 0) + np.maximum(105 - price, 0) - 10

# Prepare output directory for saving images
output_dir = os.path.dirname(os.path.abspath(__file__))
os.makedirs(output_dir, exist_ok=True)

# Plot and save each strategy with realistic P/L profiles
strategies = {
    # 'Iron Condor': iron_condor, 
    # 'Bull Put Spread': bull_put_spread,
    'Iron Butterfly': iron_butterfly, 
    # 'Iron Lizard': iron_lizard, 
    # 'Long Straddle': long_straddle
}

for name, strategy in strategies.items():
    plt.figure(figsize=(6, 6))
    plt.plot(underlying_price, strategy(underlying_price), label=name, color='blue')
    plt.axhline(0, color='white', linewidth=0.5)
    plt.xlabel("Underlying Price")
    plt.ylabel("P/L")
    plt.title(f"{name} P/L")
    plt.grid(True)
    # plt.legend()
    
    # Set axis limits to capture the characteristic points more effectively
    plt.xlim(min(k1 - 10, 80), max(k4 + 10, 120))
    plt.ylim(-20, 20)
    
    # Save plot as an image file
    plt.savefig(os.path.join(output_dir, f"{name.replace(' ', '_')}_PL.png"), dpi=300, bbox_inches='tight')
    plt.close()