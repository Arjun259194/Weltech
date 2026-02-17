"use client";
import React, {
  useState,
  useRef,
  useEffect,
  ReactElement,
  CSSProperties,
} from "react";

// Language code type
type LanguageCode = "en" | "gu";

// Translation key type
type TranslationKey =
  | "switchLanguage"
  | "submit"
  | "cancel"
  | "save"
  | "delete"
  | "edit"
  | "close"
  | "open"
  | "search"
  | "filter"
  | "settings";

// Position type
type PositionType = "top-right" | "top-left" | "bottom-right" | "bottom-left";

// Translation object type
type Translations = {
  [key in LanguageCode]: {
    [key in TranslationKey]: string;
  };
};

// Language translations - English and Gujarati
const translations: Translations = {
  en: {
    switchLanguage: "Switch Language",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    close: "Close",
    open: "Open",
    search: "Search",
    filter: "Filter",
    settings: "Settings",
  },
  gu: {
    switchLanguage: "ભાષા બદલો",
    submit: "સબમિટ કરો",
    cancel: "રદ કરો",
    save: "સાચવો",
    delete: "કાઢી નાખો",
    edit: "સંપાદિત કરો",
    close: "બંધ કરો",
    open: "ખોલો",
    search: "શોધો",
    filter: "ફિલ્ટર",
    settings: "સેટિંગ્સ",
  },
};

// Component props interface
interface LanguageToggleWrapperProps {
  children: ReactElement;
  textKey: TranslationKey;
  availableLanguages?: LanguageCode[];
  defaultLanguage?: LanguageCode;
  position?: PositionType;
}

// Position styles type
type PositionStyles = CSSProperties & {
  position: "absolute";
  zIndex: number;
};

const LanguageToggleWrapper: React.FC<LanguageToggleWrapperProps> = ({
  children,
  textKey,
  availableLanguages = ["en", "gu"],
  defaultLanguage = "en",
  position = "top-right",
}) => {
  const [currentLanguage, setCurrentLanguage] =
    useState<LanguageCode>(defaultLanguage);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
    setShowToggle(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setShowToggle(false);
    }, 300);
  };

  const getNextLanguage = (): LanguageCode => {
    const currentIndex = availableLanguages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    return availableLanguages[nextIndex];
  };

  const getLanguageName = (code: LanguageCode): string => {
    const names: Record<LanguageCode, string> = {
      en: "English",
      gu: "ગુજરાતી",
    };
    return names[code] || code;
  };

  const cycleLanguage = (): void => {
    setCurrentLanguage(getNextLanguage());
  };

  const getTranslatedText = (): string => {
    return translations[currentLanguage]?.[textKey] || textKey;
  };

  const getPositionStyles = (): PositionStyles => {
    const baseStyles: PositionStyles = {
      position: "absolute",
      zIndex: 1000,
    };

    switch (position) {
      case "top-right":
        return { ...baseStyles, top: "-8px", right: "-8px" };
      case "top-left":
        return { ...baseStyles, top: "-8px", left: "-8px" };
      case "bottom-right":
        return { ...baseStyles, bottom: "-8px", right: "-8px" };
      case "bottom-left":
        return { ...baseStyles, bottom: "-8px", left: "-8px" };
      default:
        return { ...baseStyles, top: "-8px", right: "-8px" };
    }
  };

  // Clone the child element and inject the translated text
  const renderChild = (): ReactElement => {
    const child = React.Children.only(children) as ReactElement<any>;

    // If child has children prop (like button text), replace it
    if (child.props.children !== undefined) {
      return React.cloneElement(child, {
        ...child.props,
        children: getTranslatedText(),
      });
    }

    // If child has a value prop (like input), replace it
    if (child.props.value !== undefined) {
      return React.cloneElement(child, {
        ...child.props,
        value: getTranslatedText(),
      });
    }

    // Otherwise return as is
    return child;
  };

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", display: "inline-block" } as CSSProperties}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderChild()}

      {showToggle && (
        <div
          style={
            {
              ...getPositionStyles(),
              opacity: showToggle ? 1 : 0,
              transition: "opacity 0.2s ease-in-out",
            } as CSSProperties
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={cycleLanguage}
            style={
              {
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              } as CSSProperties
            }
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = "#3b82f6";
              e.currentTarget.style.transform = "scale(1)";
            }}
            title={`Switch to ${getLanguageName(getNextLanguage())}`}
          >
            <span>{getLanguageName(currentLanguage)}</span>
            <span style={{ fontSize: "14px" } as CSSProperties}>→</span>
            <span>{getLanguageName(getNextLanguage())}</span>
          </button>
        </div>
      )}
    </div>
  );
};

// Example usage component
const Demo: React.FC = () => {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#1e293b" }}>
        Language Toggle Wrapper Demo (TypeScript)
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "10px", color: "#475569" }}>
            Basic Button
          </h3>
          <LanguageToggleWrapper textKey="submit" position="top-right">
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Submit
            </button>
          </LanguageToggleWrapper>
        </div>

        <div>
          <h3 style={{ marginBottom: "10px", color: "#475569" }}>
            Multiple Buttons
          </h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <LanguageToggleWrapper textKey="save" position="top-right">
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Save
              </button>
            </LanguageToggleWrapper>

            <LanguageToggleWrapper textKey="cancel" position="top-left">
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Cancel
              </button>
            </LanguageToggleWrapper>

            <LanguageToggleWrapper textKey="delete" position="bottom-right">
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#f59e0b",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Delete
              </button>
            </LanguageToggleWrapper>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "10px", color: "#475569" }}>
            English/Gujarati Only
          </h3>
          <LanguageToggleWrapper textKey="search" position="top-right">
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#8b5cf6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Search
            </button>
          </LanguageToggleWrapper>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ marginBottom: "10px", color: "#1e293b" }}>How to use:</h3>
        <ol style={{ color: "#475569", lineHeight: "1.6" }}>
          <li>Hover over any button to see the language toggle</li>
          <li>Click the toggle to switch between English and Gujarati</li>
          <li>Each button maintains its own language state independently</li>
          <li>Toggle shows: "English → ગુજરાતી" or "ગુજરાતી → English"</li>
        </ol>
      </div>
    </div>
  );
};

export default Demo;
export { LanguageToggleWrapper };
export type {
  LanguageToggleWrapperProps,
  LanguageCode,
  TranslationKey,
  PositionType,
};
