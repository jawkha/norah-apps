import React from 'react';
import AnswerField from './AnswerField';

const TableRow = ({ multiple, number }) => {
  return (
    <div className="table-row">
      <span>{multiple}</span>
      <span>X</span>
      <span>{number}</span>

      <span> = </span>
      <span>{<AnswerField answer={multiple * number} />}</span>
    </div>
  );
};

export default TableRow;
