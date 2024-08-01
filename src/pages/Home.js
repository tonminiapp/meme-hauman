import React from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Title from "../components/Title";
import InstagramIcon from "../assets/images/instagram.svg";
import Label from "../components/Label";
import SmallCard from "../components/SmallCard";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <Button>Text</Button>
      <Title>About</Title>
      <IconButton icon={InstagramIcon} />
      <Label>The Fiercest Token on Solana!</Label>
      <SmallCard
        title="Solana Wallet"
        description="Download a Solana wallet of your choice, such as Phantom or Solflare browser extensions."
      />
      <Card
        title="Solana Wallet"
        description="Download a Solana wallet of your choice, such as Phantom or Solflare browser extensions."
      />
      <Card
        title="To the MOON, fam!"
        description="Download a Solana wallet of your choice, such as Phantom or Solflare browser extensions."
        light={true}
      />
    </div>
  );
}