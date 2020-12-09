import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const CardList = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <Card containerStyle={cardStyles} key={card.name}>
          <TouchableHighlight
            key={card.name}
            onPress={() => (card.action ? card.action() : undefined)}
            underlayColor="#8B008B"
          >
            <Card.FeaturedTitle style={styles.title}>
              {card.icon ? (
                <Icon
                  name={card.icon}
                  color={card.iconColor ? card.iconColor : 'white'}
                  size={card.iconSize ? card.iconSize : 32}
                  style={styles.icon}
                  type={card.iconType}
                />
              ) : undefined}
              {card.name}
            </Card.FeaturedTitle>
          </TouchableHighlight>
        </Card>
      ))}
    </>
  );
};

const cardStyles = {
  borderColor: 'transparent',
  borderRadius: 6,
  backgroundColor: 'purple',
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 18,
  opacity: 0.85,
  minWidth: '50%',
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 32,
    marginTop: 12,
    fontSize: 48,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});
export default CardList;
