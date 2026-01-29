# 🚀 Deploy Forge

**Deploy Forge** is a self-built automated deployment system that mimics platforms like Netlify or Vercel. It automatically builds and deploys applications to a cloud server whenever new code is pushed to GitHub.

---

## 🧠 Project Goal

To build a complete end-to-end deployment automation system from scratch without using ready-made CI/CD tools.

When code is pushed to GitHub:
1. A webhook notifies the server  
2. The server pulls the latest code  
3. A new Docker image is built  
4. The old container is stopped  
5. The updated app is deployed automatically  

No manual login. No manual restart.

---

## 🏗 Architecture Overview

Developer Push → GitHub → Webhook → Deployment Server  
                                     │  
                                     ├── Pull latest code  
                                     ├── Build Docker image  
                                     ├── Stop old container  
                                     └── Run new container  

---

## 🛠 Tech Stack

- **Git & GitHub** – Version control & trigger events  
- **Node.js (Express)** – Webhook listener service  
- **Shell Script** – Deployment automation logic  
- **Docker** – Application containerization  
- **Terraform** – Cloud infrastructure provisioning  
- **Ansible** – Server configuration & setup  
- **Nginx** – Serving the React application  

---

## 📁 Project Structure
<img width="238" height="560" alt="image" src="https://github.com/user-attachments/assets/5738b730-5ad3-4d47-b2e0-673e76050dbf" />


