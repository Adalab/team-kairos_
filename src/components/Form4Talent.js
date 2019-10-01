import React from 'react';

const Form4Talent = props => {
  const {rol} = props;
  return (
    <fieldset>
      <label htmlFor="PRLChecked">PRL </label>
      <input type="checkbox" id="PRLChecked" name="PRLChecked" readOnly={!(rol==='talent')&&'readonly'} />
      <label htmlFor="clientSendChecked">Alta Plataforma Cliente</label>
      <input type="checkbox" id="clientSendChecked" name="clientSendChecked" readOnly={!(rol==='talent')&&'readonly'} />
  </fieldset>
  );

}

export default Form4Talent;