<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/19757152/72677997-e3738100-3a6f-11ea-8974-e8bdc870d9a0.png" alt="Harmoney logo"></a>
</p>
<h3 align="center">Harmoney</h3>

<div align="center">

  [![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](https://uofthacks.com/) 
  [![Status](https://img.shields.io/badge/status-complete-success.svg)]() 
  [![License](https://img.shields.io/badge/license-GPL-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Harmoney - A UofTHacks VII project. Built by @jcserv, @daniil-oliynyk, @omardahir99, @matthuynh
    <br> 
</p>

## 🧐 Problem Statement <a name = "problem_statement"></a>
Orange juice and toothpaste. Bleach and annomia. Lego bricks and feet. Friends and money. These pairs all have one thing in common: they are best left unmixed. Mixing friends and money can be an unnecessary source of strain in friendships. Harmoney is a group payments solution that eliminates these pain points.

<!-- ## 📝 Table of Contents
- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Authors](#authors) -->

## 💡 Idea / Solution <a name = "idea"></a>
Harmoney aims to solve situations that may arise during everyday life. One major pain point that Harmoney aims to solve is the idea of "group e-tranfers" and "group bill payments". Our app allows you to request money from other users on a per-request or on a scheduled basis.

## 📷 Screenshots/Project Demo <a name="screenshots"></a>
[View the Project Demo Here](https://youtu.be/s13y0c__6u4)
You can click on each screenshot to expand them.

<p style="text-align:center;">
  <img src="https://user-images.githubusercontent.com/19757152/73596160-e9487800-44ed-11ea-9df0-b11131c552bc.PNG" width="250" />
  <img src="https://user-images.githubusercontent.com/19757152/73596168-f6656700-44ed-11ea-8b3a-725600a29207.PNG" width="250" /> 
  <img src="https://user-images.githubusercontent.com/19757152/73596305-e00bdb00-44ee-11ea-85b2-4203cce89f2f.PNG" width="250" /> 
</p>


<p style="text-align:center;">
  <img src="https://user-images.githubusercontent.com/19757152/73596239-99b67c00-44ee-11ea-85fa-edf3f22e380e.PNG" width="250" /> 
  <img src="https://user-images.githubusercontent.com/19757152/73596253-b488f080-44ee-11ea-823b-32404936b0c2.PNG" width="250" />
  <img src="https://user-images.githubusercontent.com/19757152/73596282-cc607480-44ee-11ea-893e-e21688eecab2.PNG" width="250" /> 
</p>


<!-- ## 💡 Inspiration <a name = "inspiration"></a> -->

## ✅ What it Does <a name = "inspiration"></a>
Users that want to request money can create a Harmoney Room. These users are known as the Room Owner. With a Room, you can generate a unique Room ID and share this ID with other users (such as your friends). Your friends can use this ID to join your Room. Once your friends are in the Room, they can see other users who are in the Room, and they can also see how much money is owed to the Room Owner. Money is transferred between users through the use of e-transfers, which can be completed through services such as Stripe or Interac. Using a Room is useful because it keeps a record of all transactions. The Room can also notify other users of how much money they owe.

To help you understand when Harmoney would be useful, we have developed three common scenarios that you may have experienced yourself:
1. Suppose you are eating out with your friends at a restaurant that only takes debit. You offer to take the entire bill for your friends, but in exchange you ask that they re-pay you at a later day. You can use Harmoney to create a Room, and invite your friends to that Room. You can specify a Room Balance, and Harmoney will automatically split this balance equally between your friends. A request will be sent to each friend, and you will be able to view the progress of the Room at any time.
2. Suppose you are living with a roommate, and you both decide to split the monthly Internet bill. Normally, you pay the bill, while your roommate sends you an e-transfer to repay you. With Harmoney, you can create a Room with your roommate, and set-up a recurring monthly balance. At the same time each month, the Room will notify your roommate to transfer you money.
3. Suppose you and a group of friends want to buy a big gift for someone. You are with your friends at the mall, and you guys find a good gift. You offer to pay for the gift. Similarly to our restaurant scenario, you can use Harmoney to create a Room and invite your friends to the Room.


## 💻 How we built it <a name = "inspiration"></a>
The application runs on mobile devices. React Native was used to develop the front-end interface, while Node.js was used to power the back-end. MongoDB is used to store Users and Room Data, and Passport is used to authenticate users.

<!-- ## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development 
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

## 🎈 Usage <a name="usage"></a>
Add notes about how to use the system. -->

## ⛏️ Built With <a name = "tech_stack"></a>
- [MongoDB](https://www.mongodb.com/)
- [ExpressJS](https://expressjs.com/)
- [React Native](https://facebook.github.io/react-native/)
- [PassportJS](http://www.passportjs.org/)
- [NodeJS](https://nodejs.org/en/)

## ✍️ Authors <a name = "authors"></a>
- [@jcserv](https://github.com/jcserv)
- [@daniil-oliynyk](https://github.com/daniil-oliynyk)
- [@omardahir99](https://github.com/omardahir99)
- [@matthuynh](https://github.com/matthuynh)

README format provided by [Kyle Lobo](https://github.com/kylelobo/The-Documentation-Compendium)
