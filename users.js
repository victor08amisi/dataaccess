import express from "express";
const router = express.Router();

const users = [
  {
    id: 1,
    name: "Victor Amisi",
    email: "victor@example.com",
    role: "admin",
    clearanceLevel: "Secret",
    address: "123 Wellington St, Ottawa, ON"
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    role: "regular",
    clearanceLevel: "Reliability",
    address: "456 Bank St, Ottawa, ON"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "regular",
    clearanceLevel: "Enhanced Reliability",
    address: "789 Elgin St, Ottawa, ON"
  },
  {
    id: 4,
    name: "Mike Chen",
    email: "mike@example.com",
    role: "admin",
    clearanceLevel: "Top Secret",
    address: "321 Preston St, Ottawa, ON"
  }
];

export  default users;
