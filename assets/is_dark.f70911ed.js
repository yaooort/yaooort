import{C as o,_ as r}from"./mermaid.core.a2860425.js";const s=n=>{const{r:a,g:t,b:e}=o.parse(n),i=.2126*r.channel.toLinear(a)+.7152*r.channel.toLinear(t)+.0722*r.channel.toLinear(e);return r.lang.round(i)};var c=s;const l=n=>c(n)>=.5;var u=l;const h=n=>!u(n);var L=h;export{L as i};
