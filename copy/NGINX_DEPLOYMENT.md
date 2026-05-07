# Nginx Deployment Guide for Kelin Graphics System Website

## Prerequisites

1. **Ubuntu/Debian Server**
2. **Nginx installed**
3. **Node.js and npm installed**
4. **Domain name configured** (kelinph.com)

## Installation Steps

### 1. Install Nginx

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2. Build Next.js Static Site

```bash
cd /path/to/kelin-website
npm install
npm run build
```

### 3. Create Website Directory

```bash
sudo mkdir -p /var/www/kelin-website
sudo chown -R $USER:$USER /var/www/kelin-website
```

### 4. Copy Built Files

```bash
# Copy the built static files to the web directory
cp -r out/* /var/www/kelin-website/out/
```

### 5. Install Nginx Configuration

```bash
# Copy nginx.conf to sites-available
sudo cp nginx.conf /etc/nginx/sites-available/kelin-website

# Create symbolic link to sites-enabled
sudo ln -s /etc/nginx/sites-available/kelin-website /etc/nginx/sites-enabled/

# Remove default configuration (optional)
sudo rm /etc/nginx/sites-enabled/default
```

### 6. Test Nginx Configuration

```bash
sudo nginx -t
```

### 7. Reload Nginx

```bash
sudo systemctl reload nginx
```

## SSL Certificate Setup (Let's Encrypt)

### 1. Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Obtain SSL Certificate

```bash
sudo certbot --nginx -d kelinph.com -d www.kelinph.com
```

### 3. Auto-renewal Setup

Certbot automatically sets up a cron job for renewal. Verify it:

```bash
sudo certbot renew --dry-run
```

## Deployment Script

Create a deployment script `deploy.sh`:

```bash
#!/bin/bash

echo "Starting deployment..."

# Navigate to project directory
cd /path/to/kelin-website

# Pull latest changes (if using Git)
git pull origin main

# Install dependencies
npm install

# Build the project
npm run build

# Copy files to web directory
sudo cp -r out/* /var/www/kelin-website/out/

# Reload Nginx
sudo systemctl reload nginx

echo "Deployment complete!"
```

Make it executable:

```bash
chmod +x deploy.sh
```

## Directory Structure

```
/var/www/kelin-website/
├── out/                    # Static built files
│   ├── _next/             # Next.js assets
│   ├── images/            # Images
│   ├── index.html         # Home page
│   ├── about/
│   ├── contact/
│   └── ...
```

## Troubleshooting

### Check Nginx Status

```bash
sudo systemctl status nginx
```

### View Error Logs

```bash
sudo tail -f /var/log/nginx/kelin-error.log
```

### View Access Logs

```bash
sudo tail -f /var/log/nginx/kelin-access.log
```

### Restart Nginx

```bash
sudo systemctl restart nginx
```

### Check Port 80 and 443

```bash
sudo netstat -tlnp | grep nginx
```

## Performance Optimization

### Enable HTTP/2

Already enabled in the configuration with `http2` directive.

### Enable Gzip Compression

Already configured in nginx.conf.

### Browser Caching

Static assets are cached for 1 year with:
```nginx
expires 1y;
add_header Cache-Control "public, immutable";
```

## Security Best Practices

1. **Keep Nginx updated**
   ```bash
   sudo apt update && sudo apt upgrade nginx -y
   ```

2. **Configure Firewall (UFW)**
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw enable
   ```

3. **Regular SSL certificate renewal**
   Certbot handles this automatically, but verify periodically.

4. **Monitor logs regularly**
   Check for unusual access patterns or errors.

## Monitoring

### Setup Basic Monitoring

```bash
# Install monitoring tools
sudo apt install htop iotop -y

# Monitor Nginx processes
htop -p $(pgrep nginx | tr '\n' ',')
```

### Check Website Status

```bash
curl -I https://kelinph.com
```

## Maintenance

### Update Website

1. Build new version
2. Copy files to `/var/www/kelin-website/out/`
3. Reload Nginx

### Backup Configuration

```bash
sudo cp /etc/nginx/sites-available/kelin-website ~/nginx-backup-$(date +%Y%m%d).conf
```

## Alternative: PM2 for Next.js Server Mode

If you prefer running Next.js in server mode instead of static export:

```bash
# Install PM2
npm install -g pm2

# Start Next.js
pm2 start npm --name "kelin-website" -- start

# Save PM2 configuration
pm2 save

# Enable PM2 startup
pm2 startup
```

Then uncomment the development proxy configuration in nginx.conf.

## Contact

For issues or questions, contact: info@kelinph.com
Telephone: (02) 8711-1888
Mobile: 0917 678 0608 | 0908 196 0836
