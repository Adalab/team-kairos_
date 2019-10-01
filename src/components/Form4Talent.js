import React from 'react';

const Form4Talent = props => {
  return (
    <fieldset>
      <label htmlFor="PRLChecked">PRL </label>
      <input type="checkbox" id="PRLChecked" name="PRLChecked" />
      <label htmlFor="clientSendChecked">Alta Plataforma Cliente</label>
      <input type="checkbox" id="clientSendChecked" name="clientSendChecked" />
  </fieldset>
  );

}

export default Form4Talent;