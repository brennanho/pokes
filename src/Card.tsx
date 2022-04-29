import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {
  faClover,
  faSpider,
  faDiamond,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import React, { useEffect, useState } from "react";

const StyledCard = styled.div`
  width: 17vw;
  height: 24vw;
  perspective: 1000px; /* 3D effect */
  background-color: white;
  border-radius: 0.5em;
  transition: transform 0.8s;
  transform: translate(0%);
  background-color: transparent;
  &.hidden {
    transform: ${({ isFlop }) =>
      isFlop ? `translateX(-400%)` : "translate(-100%)"};
  }
  .inner {
    &.hidden {
      transform: rotateY(180deg);
    }
    height: 100%;
    width: 100%;
    box-shadow: 0 1em 2em 0 rgba(0, 0, 0, 0.5);
    position: relative;
    transition: transform 3s;
    transform-style: preserve-3d;
    border-radius: 1em;
    background-color: white;
    .front,
    .back {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5em;
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }
    .front {
      .top {
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
          font-size: 5vw;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      svg:nth-child(1) {
        font-size: 8vw;
      }
      svg:nth-child(2) {
        font-size: 4vw;
      }
    }
    .back {
      transform: rotateY(180deg);
      background: url(https://d1jodjo001vt3e.cloudfront.net/final/8cEbeEMLi.png);
      background-size: 100% 100%;
    }
  }
`;

const getIcon = (suit: Suit): Icon => {
  const icons = {
    spade: { element: faSpider, color: "#484848" },
    diamond: { element: faDiamond, color: "#d12d36" },
    heart: { element: faHeart, color: "#d12d36" },
    clover: { element: faClover, color: "#484848" },
  };
  return icons[suit];
};

const useHidden = (isHidden: boolean) => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setHidden(isHidden);
  }, [isHidden]);
  return hidden;
};

export const Card = ({ rank, suit, isFlop, isHidden, ...props }: CardProps) => {
  const { element, color } = getIcon(suit);
  const hidden = useHidden(isHidden);

  return (
    <StyledCard isFlop={isFlop} className={classNames({ hidden })} {...props}>
      <div className={classNames({ inner: true, hidden })}>
        <div className="front">
          <div className="top">
            <span>{rank}</span>
            <FontAwesomeIcon icon={element} color={color} />
          </div>
          <div className="bottom">
            <FontAwesomeIcon icon={element} color={color} />
          </div>
        </div>
        <div className="back"></div>
      </div>
    </StyledCard>
  );
};

type Icon = { element: IconDefinition; color: string };

type Suit = "clover" | "diamond" | "heart" | "spade";

type CardProps = {
  suit: Suit;
  rank:
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "J"
    | "Q"
    | "K"
    | "A";
  hidden: boolean;
  isFlop: boolean;
  isHidden: boolean;
};
