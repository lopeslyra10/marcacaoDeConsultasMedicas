# Sistema de Agendamento de Consultas

**Nomes:** 
Augusto Lopes Lyra  
Vinícius Ribeiro Nery
**RM:** 
558209  
559165

## 🩺 Clínica App  

Aplicativo mobile para marcação e gestão de consultas médicas com perfis de **administrador**, **médico** e **paciente**, desenvolvido em **React Native (Expo)** e **TypeScript**, como projeto acadêmico.  

---

## 👥 Perfis de usuário  

- **Admin:** visão geral do sistema e lista de todos os agendamentos.  
- **Médico:** agenda própria, exibição de consultas relacionadas ao seu perfil (com especialidade e CRM).  
- **Paciente:** agenda suas consultas, visualiza apenas seus próprios agendamentos e acessa um histórico breve.  

---

## 🚀 Funcionalidades Implementadas  

### 🔐 Autenticação  
- Tela de login simulada com persistência via **AsyncStorage**.  
- Contexto global de autenticação com **AuthContext**.  
- Diferenciação de acesso por tipo de usuário (**admin**, **doctor**, **patient**) com `UserType`.  

### 👤 Perfil  
- Exibe dados personalizados conforme o tipo de usuário logado:  
  - **Admin:** nome e tipo de usuário.  
  - **Médico:** nome, especialidade e CRM.  
  - **Paciente:** nome, idade e breve histórico.  

### 🗓️ Agendamentos  
- Visualização dinâmica de agendamentos baseada no perfil:  
  - **Admin:** acessa todos os agendamentos.  
  - **Médico:** acessa apenas os agendamentos em que é responsável.  
  - **Paciente:** acessa somente seus próprios agendamentos.  
- Uso do componente **AgendamentoCard** para exibir consultas de forma organizada.  

### 📱 Navegação  
- Implementada com **React Navigation** (Stack Navigation).  
- Redirecionamento automático para telas específicas conforme o perfil do usuário.  

---

## 🛠️ Arquitetura e Tecnologias  

- **Stack:** React Native (Expo), TypeScript.  
- **Navegação:** @react-navigation/native (stack navigation).  
- **Persistência:** AsyncStorage para simulação de login e dados locais.  
- **Context API:** gerenciamento de sessão e perfis de usuário.  

---

## ▶️ Como executar  

1. Instale as dependências:  
   ```bash
   npm install
2. Inicie o App:
```bash
npm run start
```
3. Inicie o App:
```bash
npm run android
npm run web
```

