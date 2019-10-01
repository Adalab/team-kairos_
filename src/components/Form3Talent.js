import React from 'react';

const Form3Talent = props => {
  const {rol} = props;
  return (
    <fieldset>
      <label htmlFor="ambassador">Embajador</label>
      <input type="text" id="ambassador" name="ambassador" disabled={!(rol==='talent')&&'disabled'} />
  </fieldset>
  );

}

export default Form3Talent;