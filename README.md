# Sistema de Agendamento de Consultas

**Nome:** Augusto Lopes Lyra  
**RM:** 558209

## Descrição do Projeto

# 🩺 Clínica App

Aplicativo mobile desenvolvido com **React Native**, **Expo** e **TypeScript**, com foco em uma clínica médica que atende diferentes tipos de usuários: **administrador**, **médico** e **paciente**. O app permite login, exibição de perfis personalizados e visualização de agendamentos conforme o tipo de usuário.

## 🚀 Funcionalidades Implementadas

### 🔐 Autenticação
- Tela de login simulada com persistência usando `AsyncStorage`.
- Contexto de autenticação (`AuthContext`) para manter estado global do usuário logado.
- Tipagem com `UserType` para diferenciar usuários: `admin`, `doctor` e `patient`.

### 👤 Tela de Perfil
- Exibe informações personalizadas de acordo com o tipo de usuário logado.
- Exemplo:
  - **Admin**: nome, tipo de usuário.
  - **Médico**: nome, especialidade, CRM.
  - **Paciente**: nome, idade, histórico breve.

### 🗓️ Tela de Agendamentos
- Mostra os agendamentos de forma dinâmica, com base no tipo do usuário:
  - **Admin** vê todos os agendamentos.
  - **Médico** vê agendamentos onde ele é o médico.
  - **Paciente** vê apenas os seus próprios agendamentos.
- Componentização com `AgendamentoCard` para exibir cada agendamento.

### 📱 Navegação
- Utiliza `React Navigation` com navegação por stack.
- Redirecionamento inteligente com base no tipo do usuário após login.

