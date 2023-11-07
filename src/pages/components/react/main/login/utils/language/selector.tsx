"use client";

import { useDictionaries } from "@/app/services/internal/general/world/dictionaries/states/imp";
import Cookies from "js-cookie";
import { useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";

const LanguageSelector = () => {
  const { setLanguage, getDictionaries, setDictionaries, language } =
    useDictionaries();

  const handleDictionarie = async () => {
    const idiom =
      language === "US" ? "EN" : language === "CN" ? "zh-CN" : language;
    Cookies.set("UserLang", idiom);

    const lang = idiom === "zh-CN" ? idiom : idiom.toLowerCase();

    const result = await getDictionaries(lang);
    setDictionaries(result);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (language !== "ES") {
      handleDictionarie();
    }

    if (language === "ES") {
      Cookies.set("UserLang", "ES");
      setDictionaries({});
    }
  }, [language]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const lang = Cookies.get("UserLang");
    if (lang) {
      const idiom = lang === "zh-CN" ? "CN" : lang;
      setLanguage(idiom);
    }
  }, [Cookies.get("UserLang")]);

  return (
    <ReactFlagsSelect
      countries={["ES", "US", "PT", "FR", "DE", "CN"]}
      customLabels={{
        US: "EN",
        ES: "ES",
        PT: "PT",
        FR: "FR",
        DE: "DE",
        CN: "CN",
      }}
      selected={language === "EN" ? "US" : language}
      onSelect={(code) => setLanguage(code)}
      placeholder=" "
      fullWidth={true}
    />
  );
};

export default LanguageSelector;
