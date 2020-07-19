import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default function PokeballButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} focused={focused}>
      <Button
        colors={focused ? ['#4F85D8', '#356abc'] : ['#fff', '#ccc']}
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="shopping-cart"
          size={30}
          color={focused ? '#fff' : '#000'}
        />
        <Label focused={focused}>Cart</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
