
import { useState } from 'react';
import './FlagSelect.css';
function FlagSelect() {
  const [selected, setSelected] = useState('uz');
  const [open, setOpen] = useState(false);
  const handleSelect = (code) => {
    setSelected(code);
    setOpen(false);
  };

  const flags = {
    uz: "https://flagcdn.com/w40/uz.png",
    ru: "https://flagcdn.com/w40/ru.png",
  };

  return (
    <div className="custom-select">
      <div className="select-selected" 
      onClick={() => setOpen(!open)}>
      <img src={flags[selected]} alt={selected} />
      </div>
      {open && (
        <div className="select-options">
          <div value="uz" onClick={() => handleSelect('uz')}>
            <img src={flags.uz} alt="uz" /><span className='language_span'>Uzbekistan</span>
          </div>
          <div value="ru" onClick={() => handleSelect('ru')}>
            <img src={flags.ru} alt="ru" /><span className='language_span'>Russia</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FlagSelect;
