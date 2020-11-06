import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const CardList = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <Card containerStyle={styles.card} key={card.name}>
          <Card.Title style={styles.title}>
            <Icon
              name={card.icon}
              size={24}
              type={card.type ? card.type : undefined}
              style={styles.icon}
            />
            {card.name}
          </Card.Title>
        </Card>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: 'transparent',
    borderRadius: 6,
    backgroundColor: 'purple',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 18,
    opacity: 0.85,
    cursor: 'pointer',
  },
  icon: {
    marginHorizontal: 32,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
});
export default CardList;
