import React from "react";

const sizeClasses = {
  txtManropeRegular16Black90001: "font-manrope font-normal",
  txtManropeMedium20: "font-manrope font-medium",
  txtManropeRegular20: "font-manrope font-normal",
  txtManropeMedium22: "font-manrope font-medium",
  txtManropeBold38: "font-bold font-manrope",
  txtManropeMedium24: "font-manrope font-medium",
  txtManropeRegular14: "font-manrope font-normal",
  txtManropeRegular16: "font-manrope font-normal",
  txtManropeMedium25: "font-manrope font-medium",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeMedium20WhiteA700: "font-manrope font-medium",
  txtManropeBold90: "font-bold font-manrope",
  txtManropeMedium30: "font-manrope font-medium",
  txtManropeSemiBold22WhiteA700: "font-manrope font-semibold",
  txtManropeSemiBold40: "font-manrope font-semibold",
  txtManropeMedium35: "font-manrope font-medium",
  txtManropeSemiBold45: "font-manrope font-semibold",
  txtManropeBold44: "font-bold font-manrope",
  txtManropeBold14GreenA700: "font-bold font-manrope",
  txtManropeBold16Gray300: "font-bold font-manrope",
  txtManropeExtraBold22: "font-extrabold font-manrope",
  txtManropeBold14Gray300: "font-bold font-manrope",
  txtManropeBold14Gray500: "font-bold font-manrope",
  txtManropeMedium22GreenA700: "font-manrope font-medium",
  txtManropeBold20: "font-bold font-manrope",
  txtManropeBold60: "font-bold font-manrope",
  txtManropeBold20WhiteA700: "font-bold font-manrope",
  txtManropeBold16: "font-bold font-manrope",
  txtManropeMedium22WhiteA700: "font-manrope font-medium",
  txtManropeMedium25WhiteA700: "font-manrope font-medium",
  txtManropeBold14: "font-bold font-manrope",
  txtManropeBold55: "font-bold font-manrope",
  txtManropeRegular16GreenA700: "font-manrope font-normal",
  txtManropeMedium30Gray50002: "font-manrope font-medium",
  txtManropeBold18: "font-bold font-manrope",
  txtManropeBold16GreenA700: "font-bold font-manrope",
  txtManropeBold30: "font-bold font-manrope",
  txtManropeSemiBold22: "font-manrope font-semibold",
  txtManropeBold72: "font-bold font-manrope",
  txtManropeRegular30: "font-manrope font-normal",
  txtManropeBold70: "font-bold font-manrope",
  txtManropeMedium16Gray600: "font-manrope font-medium",
  txtManropeRegular22: "font-manrope font-normal",
  txtManropeMedium20Gray50005: "font-manrope font-medium",
  txtManropeSemiBold28: "font-manrope font-semibold",
  txtManropeRegular24: "font-manrope font-normal",
  txtManropeRegular25: "font-manrope font-normal",
  txtManropeRegular26: "font-manrope font-normal",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeRegular28: "font-manrope font-normal",
  txtManropeBold22: "font-bold font-manrope",
  txtManropeSemiBold25: "font-manrope font-semibold",
  txtManropeMedium16: "font-manrope font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
