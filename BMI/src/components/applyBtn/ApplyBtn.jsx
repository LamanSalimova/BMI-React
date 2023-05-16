import React, { useState } from "react";
import "./applyBtn.css";
import applyLogo from "../../assets/images/applyBtn.png";
import { FaTimes } from "react-icons/fa";
export default function ApplyBtn() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    document.body.style.overflow = `${click ? "visible" : "hidden"}`;
  };

  return (
    <section className="applyBtnSection">
      <div className="applyBtn" onClick={handleClick}>
        <img src={applyLogo} />
        <span>Müraciət et</span>
      </div>
      <div className={`applyBody ${click ? "active" : ""}`}>
        <div className="applyHeader">
          <h4>Müraciət et</h4>
          <div className="closeBtnBox">
            <button>
              <FaTimes size={30} className="icon" onClick={handleClick} />
            </button>
          </div>
        </div>
        <div className="applyForm">
          <form>
            <div className="formWrapper">
              <div className="formItem">
                <label>Təlim seç*</label>
                <select
                  id="telim-select-2"
                  className="form-select"
                  name="training"
                >
                  <option defaultValue disabled>
                    Təlimi seç
                  </option>
                  <option value="">Marketing AIR</option>
                  <option value="">
                    Vaxtın və Tapşırıqların Səmərəli İdarə Edilməsi Təlimi
                  </option>
                  <option value="">ƏMAS da praktiki iş</option>
                  <option value="">Vergi Yoxlamaları və Vergi Riskləri</option>
                  <option value="">Vergi Uçotu</option>
                  <option value="">
                    0-dan başlayanlar üçün mühasibatlıq+ 1 C (8.3)
                  </option>
                  <option value="">HR-lar üçün Excel</option>
                  <option value="">
                    Təqdimat Bacarıqları və Təlimçilər üçün təlim
                  </option>
                  <option value="">HR Assistent Təlimi</option>
                  <option value="">Sosial Media Marketinqi</option>
                  <option value="">Güclü Marka Yaratma və İdarə Etmə</option>
                  <option value="">Marketinq Strategiyaları Təlimi</option>
                  <option value="">
                    0-dan başlayanlar üçün Marketinq Mütəxəssisi Təlimi
                  </option>
                  <option value="">HR Direktor</option>
                  <option value="">
                    Şirkətlərdə Təlim və İnkişaf Sisteminin Qurulması
                  </option>
                  <option value="">
                    İnsan Resurslarının Avtomatlaşdırılması
                  </option>
                  <option value="">İnsan Resurslarının İdarə Edilməsi</option>
                  <option value="">İşə Qəbul və Seçim Mərhələləri</option>
                  <option value="">Əmək Haqqı Hesablaması</option>
                  <option value="">Əmək Məcəlləsi və Kadr Kargüzarlığı</option>
                  <option value="">
                    Rəhbərlər üçün Strategiyanın Effektiv Planlaşdırılması və
                    İcrası
                  </option>
                  <option value="">
                    Rəhbərlər üçün: Auditoriya önündə təsirli nitq mədəniyyəti
                    təlimi
                  </option>
                  <option value="">Rəhbərlər üçün Maliyyə Təlimi</option>
                  <option value="">
                    Rəhbərlər üçün Liderlik və Komanda İdarəçiliyi
                  </option>
                  <option value="">Rəhbərlər üçün HR Təlimi</option>
                  <option value="">
                    Rəhbərlər üçün Performans Menecment və İşçilərin
                    Motivasiyası
                  </option>
                  <option value="">Rəhbərlər üçün Marketinq Təlimi</option>
                </select>
              </div>
              <div className="formItem">
                <label>Ad, soyad*</label>
                <input type="text" placeholder="Adınız və Soyadınız" />
              </div>
              <div className="formItem">
                <label>Telefon*</label>
                <input type="tel" placeholder="+994 50 999 99 99" />
              </div>
              <div className="formItem">
                <label>İş yeri*</label>
                <input type="text" placeholder="İş yerinizi daxil edin" />
              </div>
              <div className="formItem">
                <label>E-mail*</label>
                <input
                  type="email"
                  placeholder="E-mail ünvanınızı daxil edin"
                />
              </div>
              <div className="formItem">
                <label>Vəzifə*</label>
                <input type="text" placeholder="Vəzifəniz…" />
              </div>
            </div>
            <div className="btnWrapper">
              <input
                type="submit"
                placeholder="Müraciət göndər"
                id="submitBtn"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        className={`overlay ${click ? "active" : ""}`}
        onClick={() => setClick(false)}
      ></div>
    </section>
  );
}
