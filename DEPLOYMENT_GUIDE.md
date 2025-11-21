# 🚀 Markorp Therapy - Deployment Guide

## Deploy EN LIGNE - 3 Options

### **OPTION 1: Vercel + Railway** ⭐ (Recommandé)

#### **Déployer le FRONTEND sur Vercel (Gratuit)**

```bash
# 1. Aller sur https://vercel.com/signup
# 2. Se connecter avec GitHub
# 3. Importer le repo: markorptherapy-lab/Markorp
# 4. Configuration:
#    Root Directory: client
#    Build Command: npm run build
#    Output Directory: build
#    Framework: Create React App
# 5. Ajouter Variable d'env:
#    REACT_APP_API_URL = https://votre-backend.railway.app
# 6. Deploy ✅
```

**URL Frontend:** `https://markorp-app.vercel.app` (ou votre domaine)

#### **Déployer le BACKEND sur Railway** (~$5/mois)

```bash
# 1. Aller sur https://railway.app
# 2. Se connecter avec GitHub
# 3. New Project → Deploy from GitHub repo
# 4. Sélectionner: markorptherapy-lab/Markorp
# 5. Railway détecte automatiquement Node.js
# 6. Ajouter PostgreSQL:
#    - Click "Add"  → Add from Marketplace
#    - Sélectionner "PostgreSQL"
# 7. Variables d'env - Railway les génère automatiquement:
#    DATABASE_URL (auto)
#    NODE_ENV = production
#    JWT_SECRET = super_secret_key_production
# 8. Deploy automatique ✅
```

**URL Backend:** `https://markorp-api.railway.app/api/health`

---

### **OPTION 2: Docker Compose Local**

Pour tester localement avec tout automatisé:

```bash
# 1. Installer Docker: https://docker.com/download

# 2. Dans le dossier Markorp:
docker-compose up

# 3. L'app démarre automatiquement:
#    - Frontend: http://localhost:3000
#    - Backend: http://localhost:5000
#    - Database: PostgreSQL sur port 5432

# 4. Les identifiants:
#    DB_USER: postgres
#    DB_PASSWORD: postgres123
#    DB_NAME: markorp_db
```

---

### **OPTION 3: Heroku (Ancien - Payant)**

Heroku a arrêté son plan gratuit. Utiliser Railway plutôt.

---

## 📊 Tester après déploiement

1. **Vérifier le backend:**
   ```
   curl https://votre-backend.railway.app/api/health
   # Devrait retourner: {"status": "Server is running"}
   ```

2. **Vérifier la base de données:**
   - Sur Railway, aller dans l'onglet "PostgreSQL"
   - Les tables doivent être créées automatiquement

3. **Tester l'app complète:**
   - Créer un compte
   - Se connecter
   - Voir le dashboard avec graphiques

---

## 🌐 Ajouter un domaine personnalisé

### **Domaine pour Frontend (Vercel):**
1. Acheter domaine: markorp-therapy.com (~€10/an)
2. Aller dans Vercel → Settings → Domains
3. Ajouter votre domaine
4. Copier les DNS records de Vercel
5. Aller chez votre fournisseur DNS
6. Ajouter les DNS records
7. Attendre ~24h ✅

### **Domaine pour Backend (Railway):**
1. Railway génère une URL: `markorp-api.railway.app`
2. Créer un CNAME: `api.markorp-therapy.com` → `markorp-api.railway.app`
3. Aller chez votre fournisseur DNS
4. Ajouter le CNAME record
5. Attendre ~24h ✅

---

## 🔒 Variables d'environnement (Production)

### **Backend - Railway**
```env
NODE_ENV=production
PORT=3000 (Railway l'assigne)
DATABASE_URL=postgres://user:pass@host:5432/db (Auto)
JWT_SECRET=votre_clé_très_sécurisée
DB_NAME=markorp_db
```

### **Frontend - Vercel**
```env
REACT_APP_API_URL=https://api.markorp-therapy.com
```

---

## ✅ Checklist Déploiement

- [ ] Cloner le repo GitHub
- [ ] Créer compte Vercel (Frontend)
- [ ] Déployer Frontend
- [ ] Créer compte Railway (Backend)
- [ ] Ajouter PostgreSQL à Railway
- [ ] Déployer Backend
- [ ] Vérifier connexion API
- [ ] Tester l'app complète
- [ ] Ajouter domaine personnalisé (optionnel)
- [ ] Configurer DNS (optionnel)

---

## 🆘 Troubleshooting

### **Frontend se charge mais API ne répond pas**
```
Vérifier:
- Backend est déployé sur Railway
- REACT_APP_API_URL est correct dans Vercel
- Redéployer Frontend après changement d'env
```

### **Erreur PostgreSQL sur Railway**
```
Solution:
- Aller dans Railway → PostgreSQL service
- Cliquer "Generate" pour recréer les variables
- Redéployer Backend
```

### **Données perdues après redéploiement**
```
Normal! Railway persiste les données PostgreSQL.
Données sauvegardées même après redéploiement.
```

---

## 📞 Support

- Vercel: https://vercel.com/docs
- Railway: https://docs.railway.app
- GitHub Actions: Pour CI/CD automatique (futur)

---

**Votre app est maintenant en ligne! 🎉**
