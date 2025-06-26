import type { ButtonVariants } from "@/components/ui/button";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from "vue";

type MouseEventHandler = (event: MouseEvent) => void;
type TouchEventHandler = (event: TouchEvent) => void

export interface IntrinsicProps {
    id?: string;
    role?: string;
    tabindex?: number;
    onClick?: MouseEventHandler;
    onTouchend?: TouchEventHandler;
    onTouchmove?: TouchEventHandler;
    onTouchstart?: TouchEventHandler;
    onTouchcancel?: TouchEventHandler;
    onTouchmovePassive?: TouchEventHandler;
    onTouchstartPassive?: TouchEventHandler;
}

export interface ButtonProps extends IntrinsicProps {
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  type?: ButtonHTMLAttributes['type']
  disabled?: ButtonHTMLAttributes['disabled']
  autofocus?: ButtonHTMLAttributes['autofocus']
  form?: ButtonHTMLAttributes['form']
  formaction?: ButtonHTMLAttributes['formaction']
  formenctype?: ButtonHTMLAttributes['formenctype']
  formmethod?: ButtonHTMLAttributes['formmethod']
  formnovalidate?: ButtonHTMLAttributes['formnovalidate']
  formtarget?: ButtonHTMLAttributes['formtarget']
  name?: ButtonHTMLAttributes['name']
  value?: ButtonHTMLAttributes['value']
}

export interface InputProps extends IntrinsicProps {
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
  type?: InputHTMLAttributes['type']
  placeholder?: InputHTMLAttributes['placeholder']
  disabled?: InputHTMLAttributes['disabled']
  readonly?: InputHTMLAttributes['readonly']
  required?: InputHTMLAttributes['required']
  autocomplete?: InputHTMLAttributes['autocomplete']
  autofocus?: InputHTMLAttributes['autofocus']
  form?: InputHTMLAttributes['form']
  list?: InputHTMLAttributes['list']
  max?: InputHTMLAttributes['max']
  maxlength?: InputHTMLAttributes['maxlength']
  min?: InputHTMLAttributes['min']
  minlength?: InputHTMLAttributes['minlength']
  multiple?: InputHTMLAttributes['multiple']
  name?: InputHTMLAttributes['name']
  pattern?: InputHTMLAttributes['pattern']
  step?: InputHTMLAttributes['step']
  value?: InputHTMLAttributes['value']
}

export interface AnchorProps extends IntrinsicProps {
  class?: AnchorHTMLAttributes['class'];
  href?: string;
  target?: AnchorHTMLAttributes['target'];
  rel?: AnchorHTMLAttributes['rel'];
  download?: AnchorHTMLAttributes['download'];
}