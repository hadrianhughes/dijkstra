import React from 'react';
import { Button } from './styles';

type Option = {
  text:     string;
  id:       string;
  selected: boolean;
};

interface PropTypes {
  label:   string;
  options: Array<Option>;
  onChange: (string) => void;
}

const Selector = ({ label, options, onChange }: PropTypes) => (
  <div>
    <span>{label}</span>
    {
      options.map(o => (
        <Button
          key={o.id}
          onClick={() => onChange(o.id)}
          selected={o.selected}>{o.text}</Button>
      ))
    }
  </div>
);

export default Selector;
