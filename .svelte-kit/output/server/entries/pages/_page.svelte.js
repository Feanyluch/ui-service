import { c as create_ssr_component, v as validate_component, d as each, e as escape, a as add_attribute } from "../../chunks/index3.js";
import { I as Icon } from "../../chunks/store.js";
import { f as footerURLText, i as installCodeLang } from "../../chunks/uidata.js";
import "svelte-reveal";
const FooterSection_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '.svelte-c501ul.svelte-c501ul::before,.svelte-c501ul.svelte-c501ul::after,.svelte-c501ul.svelte-c501ul{padding:0;margin:0;box-sizing:border-box}.navigation_bar .navigation_links .svelte-c501ul:is(ul) li.svelte-c501ul{padding:0.6em 1em;position:relative;cursor:pointer;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1em}.navigation_bar .navigation_links .svelte-c501ul:is(ul) li.svelte-c501ul:not(:first-child)::before{content:"";width:0;height:2px;background-color:#1b6f85;position:absolute;bottom:-1%;border-radius:6px;left:0%;transform:translateX(-50%);transition:width 0.5s ease-in-out, left 0.5s ease-in-out}.navigation_bar .navigation_links .svelte-c501ul:is(ul) li.svelte-c501ul:hover::before{width:95%;left:50%}.navigation_bar .navigation_links .svelte-c501ul:is(ul) li a.svelte-c501ul{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:0.5em}.navigation_bar .navigation_links .svelte-c501ul:is(ul) li.svelte-c501ul:first-child{border-radius:50px;background-color:#7cd2ba;transition:all 0.5s ease-in-out;color:#0c3a46;font-weight:bold}.navigation_bar .navigation_links .svelte-c501ul:is(ul) li.svelte-c501ul:first-child:hover{background-color:#1b6f85;color:whitesmoke}.navigation_bar .navigation_links .svelte-c501ul:is(ul) li.svelte-c501ul:last-child{display:flex;flex-direction:center;justify-content:center;align-items:row;gap:0.4em;margin-left:1em}.Footer.svelte-c501ul.svelte-c501ul{width:100%;height:60vh;padding:1em;background-color:#0c3a46;display:grid;justify-content:center;align-items:center;justify-items:center;align-content:center}.Footer.svelte-c501ul .footer_container.svelte-c501ul{display:grid;grid-template-columns:repeat(6, 1fr);grid-template-rows:repeat(5, 10vh);height:50vh;padding:1em;justify-content:center;align-items:center;justify-items:center;align-content:center}.Footer.svelte-c501ul .footer_container .footer_logo.svelte-c501ul{grid-area:3/1/3/2}.Footer.svelte-c501ul .footer_container .footer_logo h2.svelte-c501ul{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;gap:0.2em;font-size:1.5rem}.Footer.svelte-c501ul .footer_container .footer_social_links.svelte-c501ul{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;gap:1em;grid-area:3/6/4/-1}.Footer.svelte-c501ul .footer_container .footer_social_links .icon.svelte-c501ul{cursor:pointer;position:relative}.Footer.svelte-c501ul .footer_container .footer_social_links .icon.svelte-c501ul::before{position:absolute;left:2vw;opacity:0;content:attr(data-custom);transition:all 0.5s ease}.Footer.svelte-c501ul .footer_container .footer_social_links .icon.svelte-c501ul:hover::before{left:2.5vw;opacity:1}.Footer.svelte-c501ul .footer_links.svelte-c501ul{width:100%;grid-area:1/2/6/6;display:grid;grid-template-columns:1fr 1fr}.Footer.svelte-c501ul .footer_links div.svelte-c501ul:nth-child(1){grid-column:1/1}.Footer.svelte-c501ul .footer_links div.svelte-c501ul:nth-child(2){grid-column:2/-1}.Footer.svelte-c501ul .footer_links div.svelte-c501ul:nth-child(n){width:100%;height:100%;text-align:center}.Footer.svelte-c501ul .footer_links div:nth-child(n) h1.svelte-c501ul{margin-bottom:1em}.Footer.svelte-c501ul .footer_links div:nth-child(n) .svelte-c501ul:is(ul){line-height:2em}@media screen and (max-width: 1200px){.Footer.svelte-c501ul.svelte-c501ul{grid-template-columns:1fr}.Footer.svelte-c501ul .footer_container.svelte-c501ul{grid-template-columns:1fr;grid-template-rows:repeat(4, 1fr);gap:1em}.Footer.svelte-c501ul .footer_container .footer_logo.svelte-c501ul{grid-area:1/1/1/2}.Footer.svelte-c501ul .footer_container .footer_social_links.svelte-c501ul{grid-area:4/1/4/-1;width:50vw;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;gap:1em}.Footer.svelte-c501ul .footer_container .footer_social_links .icon.svelte-c501ul::before{display:none}.Footer.svelte-c501ul .footer_container .footer_links.svelte-c501ul{grid-area:2/1/2/-1}}@media screen and (max-width: 600px){.Footer.svelte-c501ul.svelte-c501ul{position:relative;padding:2em;height:60vh}.Footer.svelte-c501ul .footer_container.svelte-c501ul{width:100%}.Footer.svelte-c501ul .footer_container .footer_logo.svelte-c501ul{position:absolute;top:0;left:50%;transform:translateX(-50%);width:100%;margin-top:2em;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;gap:2em}.Footer.svelte-c501ul .footer_container .footer_logo h2.svelte-c501ul{margin:0 auto;font-size:1.5rem}.Footer.svelte-c501ul .footer_container .footer_social_links.svelte-c501ul{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:2em;left:0%;bottom:10%;width:100%}.Footer.svelte-c501ul .footer_container .footer_social_links .icon.svelte-c501ul::before{display:none}.Footer.svelte-c501ul .footer_links div.svelte-c501ul:nth-child(n){width:100%;height:100%;text-align:center}.Footer.svelte-c501ul .footer_links div:nth-child(n) h1.svelte-c501ul{margin-bottom:1em}.Footer.svelte-c501ul .footer_links div:nth-child(n) .svelte-c501ul:is(ul){line-height:2em}}',
  map: null
};
const FooterSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="Footer svelte-c501ul"><div class="footer_container svelte-c501ul"><div class="footer_logo svelte-c501ul"><h2 class="svelte-c501ul">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:finance-mode",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )} Fintekkers
      </h2></div>


    <div class="footer_links svelte-c501ul">${each(footerURLText, (footerURL) => {
    return `<div class="svelte-c501ul"><h1 class="svelte-c501ul">${escape(footerURL.title)}</h1>
           <ul class="svelte-c501ul">${each(footerURL.links, (link) => {
      return `<li class="svelte-c501ul"><a${add_attribute("href", link.url, 0)} class="svelte-c501ul">${escape(link.text)}</a></li>`;
    })}</ul>
         </div>`;
  })}</div>

    
    <div class="footer_social_links svelte-c501ul"><div class="icon svelte-c501ul" data-custom="facebook">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "basil:facebook-outline",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}</div>

      <div class="icon svelte-c501ul" data-custom="stackoverflow">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "jam:stackoverflow",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}</div>

      <div class="icon svelte-c501ul" data-custom="github">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ri:github-fill",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}</div>
      <div class="icon svelte-c501ul" data-custom="twitter">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "pajamas:twitter",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}</div></div></div>
</div>`;
});
const CustomCodeBlock_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".svelte-1qwf6tb.svelte-1qwf6tb::before,.svelte-1qwf6tb.svelte-1qwf6tb::after,.svelte-1qwf6tb.svelte-1qwf6tb{padding:0;margin:0;box-sizing:border-box}.code-block-installation-container.svelte-1qwf6tb.svelte-1qwf6tb{display:grid;grid-template-columns:1fr;width:48vw}.custom_header.svelte-1qwf6tb.svelte-1qwf6tb{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1em;border-radius:6px;position:relative;z-index:3}.custom_header.svelte-1qwf6tb .custom_header_title.svelte-1qwf6tb{width:100px;padding:0.2em;text-align:center;border-radius:6px;background:whitesmoke;color:black;cursor:pointer;transition:all 0.5s ease-in-out}.custom_header.svelte-1qwf6tb .custom_header_title.svelte-1qwf6tb:hover{background:#1b6f85;color:whitesmoke}.custom_codeblock.svelte-1qwf6tb.svelte-1qwf6tb{width:100%;height:-moz-max-content;height:max-content;background:rgb(24, 24, 24);padding:1em;border-radius:6px;position:relative;margin:1em 0}.custom_codeblock.svelte-1qwf6tb .code_language.svelte-1qwf6tb{position:absolute;font-size:0.8rem;text-transform:uppercase;color:#86929c;top:0.5em}.custom_codeblock.svelte-1qwf6tb .copy_btn.svelte-1qwf6tb{background:rgba(66, 66, 66, 0.527);width:-moz-max-content;width:max-content;padding:0.2em 0.6em;border-radius:15px;position:absolute;font-size:0.9rem;width:5em;right:5px;top:5px;cursor:pointer;transition:all 0.5s ease-in-out;text-align:center}.custom_codeblock.svelte-1qwf6tb .copy_btn.svelte-1qwf6tb:hover{color:#1b6f85;background-color:whitesmoke}.custom_codeblock.svelte-1qwf6tb .code_content.svelte-1qwf6tb{margin-top:2em;height:-moz-max-content;height:max-content;overflow:hidden;white-space:pre-wrap}@media screen and (max-width: 1200px){.code-block-installation-container.svelte-1qwf6tb.svelte-1qwf6tb{width:100%}.custom_codeblock.svelte-1qwf6tb.svelte-1qwf6tb{width:80%;margin:1em auto}.custom_codeblock.svelte-1qwf6tb .code_content.svelte-1qwf6tb{max-width:100%}}@media screen and (max-width: 600px){.custom_codeblock.svelte-1qwf6tb.svelte-1qwf6tb{width:90vw}.custom_codeblock.svelte-1qwf6tb .code_content.svelte-1qwf6tb{max-width:100%}}",
  map: null
};
const CustomCodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { Typescript } = installCodeLang;
  let codeLanguage = Typescript.language;
  let codeCommand = Typescript.installCMD;
  let codeContent = Typescript.importCode;
  const codeBlockData = installCodeLang;
  $$result.css.add(css$5);
  return `<div class="code-block-installation-container svelte-1qwf6tb"><div class="custom_header svelte-1qwf6tb">${each(Object.entries(codeBlockData), ([key, _value]) => {
    return `<div class="custom_header_title svelte-1qwf6tb">${escape(key)}</div>`;
  })}</div>
    <div class="custom_codeblock svelte-1qwf6tb"><div class="copy_btn svelte-1qwf6tb">${escape("Copy")}</div>
    <div class="code_language svelte-1qwf6tb">${escape(codeLanguage)}</div>
    <div class="code_content svelte-1qwf6tb" id="mycode_command">${escape(codeCommand)}</div></div>
    <div class="custom_codeblock svelte-1qwf6tb"><div class="copy_btn svelte-1qwf6tb">${escape("Copy")}</div>
    <div class="code_language svelte-1qwf6tb">${escape(codeLanguage)}</div>
    <div class="code_content svelte-1qwf6tb" id="mycode_content">${escape(codeContent)}</div></div>

</div>`;
});
const GetStartedSection_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.svelte-1r0mecf.svelte-1r0mecf::before,.svelte-1r0mecf.svelte-1r0mecf::after,.svelte-1r0mecf.svelte-1r0mecf{padding:0;margin:0;box-sizing:border-box}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro button.svelte-1r0mecf{padding:0.5rem 1rem;border-radius:5px;background-color:#258ea8}.get-started-container.svelte-1r0mecf.svelte-1r0mecf{width:100%;background-color:#0c3a46;border-radius:6px;display:grid;grid-template-columns:repeat(auto-fit, minmax(50vw, 1fr))}.get-started-container.svelte-1r0mecf .get-started-image.svelte-1r0mecf{grid-column:1/-1;width:95%;height:25vh;border-radius:6px;background:url("https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/what%20is%20an%20api167511875313774.jpg") center center/cover no-repeat}.get-started-container.svelte-1r0mecf .get-started-text.svelte-1r0mecf{gap:1em;padding:1em;display:grid;grid-template-columns:repeat(4, 1fr);justify-items:center;border-right:solid 1px #164e63}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro.svelte-1r0mecf{display:grid;grid-template-columns:repeat(auto-fill, minmax(100px, 1fr));justify-items:center;grid-column:1/-1;padding:1em;gap:1em}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro .get-started-text-title.svelte-1r0mecf{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:0.5em;font-size:1.5rem;grid-area:1/1/1/-1}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro .get-started-text-paragraph.svelte-1r0mecf{line-height:2em;grid-area:2/2/2/5;text-align:center}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro button.svelte-1r0mecf{transition:all 0.5s ease;font-weight:bold;font-size:1rem;height:8vh;background-color:#7cd2ba;color:#05192a;grid-area:3/3/3/3;border-radius:30px;width:20vh}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro button.svelte-1r0mecf:hover{background-color:#1b6f85;color:whitesmoke}.get-started-container.svelte-1r0mecf .get-started-text .key-advantage-features.svelte-1r0mecf{display:grid;grid-template-columns:repeat(auto-fit, minmax(5vw, 1fr));justify-content:center;gap:1em;grid-auto-flow:dense;grid-column:1/-1;padding:1em;width:100%}.get-started-container.svelte-1r0mecf .get-started-text .key-advantage-features .key-advantage-feature.svelte-1r0mecf{border-radius:6px;padding:1em;aspect-ratio:1/1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1em;border:solid 1px #1b6f85;text-align:center}.get-started-container.svelte-1r0mecf .get-started-code.svelte-1r0mecf{gap:2em}.get-started-container.svelte-1r0mecf .get-started-code .codeblock.svelte-1r0mecf{padding:2em 1em 1em 1em;display:grid;grid-template-columns:repeat(5, 1fr);justify-content:center;align-items:center}.get-started-container.svelte-1r0mecf .get-started-code .codeblock .svelte-1r0mecf:is(p){grid-column:1/-1;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1em;margin-bottom:1em}.get-started-container.svelte-1r0mecf .get-started-code .get-started-code-text .svelte-1r0mecf:is(p){text-align:left}.get-started-container.svelte-1r0mecf .code-block-installation.svelte-1r0mecf{padding:2em}@media screen and (max-width: 1200px){.get-started-container.svelte-1r0mecf.svelte-1r0mecf{grid-template-columns:1fr}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro.svelte-1r0mecf{display:grid;justify-items:center}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro .get-started-text-paragraph.svelte-1r0mecf{grid-area:2/1/2/-1;width:50vw;text-align:center}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro button.svelte-1r0mecf{grid-area:3/1/3/-1}.get-started-container.svelte-1r0mecf .get-started-text .key-advantage-features.svelte-1r0mecf{grid-template-columns:repeat(auto-fit, 15vw)}.get-started-container.svelte-1r0mecf .get-started-image.svelte-1r0mecf{display:none}.get-started-container.svelte-1r0mecf .get-started-code .codeblock .code-block-installation.svelte-1r0mecf{grid-column:1/-1;border:solid 1px #86929c;backdrop-filter:blur(13px) saturate(180%);-webkit-backdrop-filter:blur(13px) saturate(180%);background-color:rgba(11, 46, 54, 0.4941176471);border-radius:12px;padding:1em 0;margin:1em 0 0 0}}@media screen and (max-width: 600px){.get-started-container.svelte-1r0mecf.svelte-1r0mecf{padding-bottom:2em}.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro .get-started-text-title.svelte-1r0mecf,.get-started-container.svelte-1r0mecf .get-started-text .get-started-text-intro .get-started-text-paragraph.svelte-1r0mecf{width:90vw;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1em}.get-started-container.svelte-1r0mecf .get-started-text .key-advantage-features.svelte-1r0mecf{grid-template-columns:repeat(3, 1fr);border-bottom:solid 1px rgba(255, 255, 255, 0.229);padding-bottom:3em}.get-started-container.svelte-1r0mecf .get-started-text .svelte-1r0mecf:is(p){width:70%}.get-started-container.svelte-1r0mecf .get-started-code .codeblock .svelte-1r0mecf:is(p){width:90vw}}',
  map: null
};
const GetStartedSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="get-started-container svelte-1r0mecf"><div class="get-started-text svelte-1r0mecf"><div class="get-started-text-intro svelte-1r0mecf"><p class="get-started-text-title svelte-1r0mecf">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "healthicons:entry-outline",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}  <strong class="svelte-1r0mecf">Get started instantly! </strong></p> <br class="svelte-1r0mecf"> 
           <p class="get-started-text-paragraph svelte-1r0mecf">Fintekkers platform provides
            you all the APIs you need to build your own fintech product, or
            solve your business opportunities at miminum cost.

           </p> 

          <button class="get-started-cta-button svelte-1r0mecf">Get Started</button></div>

        <div class="get-started-image svelte-1r0mecf"></div>
  

       <div class="key-advantage-features svelte-1r0mecf"><div class="key-advantage-feature svelte-1r0mecf">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "formkit:group",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )} 
            Consolidate all your trading tools 
        </div>
        <div class="key-advantage-feature svelte-1r0mecf">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "carbon:time",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )} 
            Access robust real-time data
        </div>
        <div class="key-advantage-feature svelte-1r0mecf">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "icons8:support",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )} 
            Lean on free dedicated US-based support
        </div></div></div>
    <div class="get-started-code svelte-1r0mecf"><div class="codeblock  svelte-1r0mecf"><p class="svelte-1r0mecf">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "line-md:cog-loop",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )} 
                            Install Fintekkers client libraries

                            <span class="svelte-1r0mecf">/
                            </span>

                            ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:electric-bolt-outline",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}  Make your first API call
                        </p>

        
                        <div class="code-block-installation svelte-1r0mecf">${validate_component(CustomCodeBlock, "CustomCodeBlock").$$render($$result, {}, {}, {})}</div></div></div> 
</div>`;
});
const computerImage = "/_app/immutable/assets/stock.b1e3dfd3.png";
const LandingSection_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.svelte-132ns87.svelte-132ns87::before,.svelte-132ns87.svelte-132ns87::after,.svelte-132ns87.svelte-132ns87{padding:0;margin:0;box-sizing:border-box}.landing-page-container.svelte-132ns87 .landing-content.svelte-132ns87{border:solid 1px #86929c;backdrop-filter:blur(13px) saturate(180%);-webkit-backdrop-filter:blur(13px) saturate(180%);background-color:rgba(11, 46, 54, 0.4941176471);border-radius:12px;border:1px solid rgba(90, 150, 163, 0.4941176471)}.button.svelte-132ns87.svelte-132ns87{padding:0.5rem 1rem;border-radius:5px;background-color:#258ea8}.landing-page-container.svelte-132ns87.svelte-132ns87{width:100%;height:100vh;background:url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat;position:relative;display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(6, 20%);border-radius:6px}.landing-page-container.svelte-132ns87 .landing-content.svelte-132ns87{width:100vw;height:100vh;display:grid;grid-template-columns:repeat(auto-fill, minmax(50px, 1fr));grid-template-rows:repeat(8, 100px);gap:1em;padding:1em}.landing-page-container.svelte-132ns87 .landing-content .landing-headline.svelte-132ns87{font-size:3rem;text-align:left;line-height:1.2em;grid-area:3/2/4/12}.landing-page-container.svelte-132ns87 .landing-content .landing-description.svelte-132ns87{font-size:1em;grid-area:4/2/5/8;margin-top:1em}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons.svelte-132ns87{grid-area:5/2/5/7}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons button.svelte-132ns87{min-width:100px;min-height:50px;font-weight:bold;border-radius:30px}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons button.svelte-132ns87:nth-child(1){background-color:#7cd2ba;color:#05192a;margin-right:1em}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons button.svelte-132ns87:nth-child(2){background-color:#1b6f85;order:2}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons .explore-product-button.svelte-132ns87{transition:all 0.5s ease-in-out}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons .explore-product-button.svelte-132ns87:hover{background-color:#7cd2ba;color:#05192a}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons .try-now-button.svelte-132ns87{transition:all 0.5s ease-in-out}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons .try-now-button.svelte-132ns87:hover{background-color:#1b6f85;color:whitesmoke}.landing-page-container.svelte-132ns87 .landing-content .landing-image.svelte-132ns87{width:100%;height:100%;transform:rotateY(180deg);grid-area:1/10/-1/-1;display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-template-rows:repeat(6, 100px)}.landing-page-container.svelte-132ns87 .landing-content .landing-image img.svelte-132ns87{display:block;grid-area:1/1/4/6}.landing-page-container.svelte-132ns87 .landing-content .landing-image .first-icon.svelte-132ns87{grid-area:5/4/5/4}.landing-page-container.svelte-132ns87 .landing-content .landing-image .second-icon.svelte-132ns87{grid-area:2/1/2/1}.landing-page-container.svelte-132ns87 .landing-content .landing-image .third-icon.svelte-132ns87{grid-area:7/2/7/2}@media screen and (max-width: 1200px){.svelte-132ns87.svelte-132ns87::before,.svelte-132ns87.svelte-132ns87::after,.svelte-132ns87.svelte-132ns87{padding:0;margin:0;box-sizing:border-box}.landing-page-container.svelte-132ns87 .landing-content.svelte-132ns87{border:solid 1px #86929c;backdrop-filter:blur(13px) saturate(180%);-webkit-backdrop-filter:blur(13px) saturate(180%);background-color:rgba(11, 46, 54, 0.4941176471);border-radius:12px;border:1px solid rgba(90, 150, 163, 0.4941176471)}.button.svelte-132ns87.svelte-132ns87{padding:0.5rem 1rem;border-radius:5px;background-color:#258ea8}.landing-page-container.svelte-132ns87 .landing-content .landing-headline.svelte-132ns87{font-size:2.5rem;line-height:1em;text-align:center;grid-area:3/1/3/-1}.landing-page-container.svelte-132ns87 .landing-content .landing-description.svelte-132ns87{grid-area:4/1/4/-1;text-align:center;margin:0 auto}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons.svelte-132ns87{grid-area:5/1/5/-1;text-align:center}.landing-page-container.svelte-132ns87 .landing-content .landing-image.svelte-132ns87{display:none}.landing-page-container.svelte-132ns87 .landing-content .landing-image .landing-image-icon.svelte-132ns87{display:none}}@media screen and (max-width: 600px){.svelte-132ns87.svelte-132ns87::before,.svelte-132ns87.svelte-132ns87::after,.svelte-132ns87.svelte-132ns87{padding:0;margin:0;box-sizing:border-box}.landing-page-container.svelte-132ns87 .landing-content.svelte-132ns87{border:solid 1px #86929c;backdrop-filter:blur(13px) saturate(180%);-webkit-backdrop-filter:blur(13px) saturate(180%);background-color:rgba(11, 46, 54, 0.4941176471);border-radius:12px;border:1px solid rgba(90, 150, 163, 0.4941176471)}.button.svelte-132ns87.svelte-132ns87{padding:0.5rem 1rem;border-radius:5px;background-color:#258ea8}.landing-page-container.svelte-132ns87 .landing-content.svelte-132ns87{padding:0;grid-template-columns:1fr;display:grid}.landing-page-container.svelte-132ns87 .landing-content .landing-headline.svelte-132ns87{font-size:2.5rem;width:100%;line-height:1.2em;text-align:center;grid-area:3/1/3/-1}.landing-page-container.svelte-132ns87 .landing-content .landing-description.svelte-132ns87{text-align:center;width:90%;grid-area:4/1/5/-1;margin-top:3em}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons.svelte-132ns87{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0em;grid-area:6/1/6/-1}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons button.svelte-132ns87{width:50%}.landing-page-container.svelte-132ns87 .landing-content .landing-cta-buttons button.svelte-132ns87:nth-child(1){order:2;margin-bottom:1em;margin-right:0}}',
  map: null
};
const LandingSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="landing-page-container svelte-132ns87"><div class="landing-content svelte-132ns87"><h1 class="landing-headline svelte-132ns87">Fintekkers is a Premier Fintech Infrastructure
        </h1>
        <p class="landing-description svelte-132ns87">We worry about scale, security and
            plumbing while you focus on your competitive advantage, your ideas.
        </p>
        <div class="landing-cta-buttons svelte-132ns87"><button class="button try-now-button svelte-132ns87">Try Now</button>
            <button class="button explore-product-button svelte-132ns87" disabled>Explore Product</button></div>
        <div class="landing-image svelte-132ns87"><img${add_attribute("src", computerImage, 0)} alt="computer-vector" class="svelte-132ns87">

        <div class="landing-image-icon first-icon svelte-132ns87">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "solar:graph-up-outline",
      style: "width: 150px; height: 150px;color:#258ea8;opacity:50%",
      class: "icon"
    },
    {},
    {}
  )}</div>
        <div class="landing-image-icon second-icon svelte-132ns87">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "cil:graph",
      style: "width: 150px; height: 150px; color:#258ea8; opacity:50%",
      class: "icon"
    },
    {},
    {}
  )}</div>
        <div class="landing-image-icon third-icon svelte-132ns87">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "pepicons-print:coins",
      style: "width: 120px; height: 120px; color:#258ea8; opacity:50%",
      class: "icon"
    },
    {},
    {}
  )}</div></div></div>

</div>`;
});
const OurFeatureSection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".svelte-1b3w482.svelte-1b3w482::before,.svelte-1b3w482.svelte-1b3w482::after,.svelte-1b3w482.svelte-1b3w482{padding:0;margin:0;box-sizing:border-box}.navigation_bar .navigation_links .svelte-1b3w482:is(ul) li a.svelte-1b3w482{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:0.5em}.Our-features-container.svelte-1b3w482.svelte-1b3w482{padding:2em 1em;background-color:#1b6f85;display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;justify-items:center;align-items:center}.Our-features-container.svelte-1b3w482 .our-feature.svelte-1b3w482{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5em;height:30vh;line-height:1.5em;border:solid 1px rgba(255, 255, 255, 0.322) !important;position:relative}.Our-features-container.svelte-1b3w482 .our-feature .feature-headline.svelte-1b3w482{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:0.5em;position:absolute;top:7%}.Our-features-container.svelte-1b3w482 .our-feature.svelte-1b3w482:nth-child(n){width:25vw;border:solid 1px rgba(255, 255, 255, 0.102);border-radius:6px;padding:1em}.Our-features-container.svelte-1b3w482 .our-feature:nth-child(n) p.svelte-1b3w482{text-align:center;padding-top:2em}@media screen and (max-width: 1200px){.Our-features-container.svelte-1b3w482.svelte-1b3w482{grid-template-columns:1fr;gap:1em}.Our-features-container.svelte-1b3w482 .our-feature.svelte-1b3w482{display:grid;justify-items:center;align-items:center}.Our-features-container.svelte-1b3w482 .our-feature.svelte-1b3w482:nth-child(n){grid-column:1/-1;width:60%}}@media screen and (max-width: 600px){.Our-features-container.svelte-1b3w482.svelte-1b3w482{height:-moz-max-content;height:max-content;display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr 1fr}.Our-features-container.svelte-1b3w482 .our-feature.svelte-1b3w482{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5em}.Our-features-container.svelte-1b3w482 .our-feature.svelte-1b3w482:nth-child(n){min-width:25vw;max-width:100%;width:100%}.Our-features-container.svelte-1b3w482 .our-feature:nth-child(n) p.svelte-1b3w482{font-size:1rem}}",
  map: null
};
const OurFeatureSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="Our-features-container svelte-1b3w482"><div class="our-feature our-feature_1 svelte-1b3w482"><div class="feature-headline svelte-1b3w482">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "icon-park-outline:speed",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}
            <h2 class="svelte-1b3w482">Fast</h2></div>
        <p class="svelte-1b3w482">Use binary data streams to turbo charge your products. &#39;Documents&#39;
            like XML &amp; JSON are decades old, and don&#39;t scale to your needs.
            Scale fast, scale globally.
        </p></div>
    <div class="our-feature our-feature_2 svelte-1b3w482"><div class="feature-headline svelte-1b3w482">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "game-icons:flexible-lamp",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}
            <h2 class="svelte-1b3w482">Convenient</h2></div>
        <p class="svelte-1b3w482">Our platform is built on top of open-source models (<a href="https://github.com/FinTekkers/ledger-models" class="svelte-1b3w482">see the code</a>). Out of the box models, and implementations in multiple languages
            (Javascript, Python, Java, Rust) let you start building your
            application, not read through reams of API docs
        </p></div>
    <div class="our-feature our-feature_3 svelte-1b3w482"><div class="feature-headline svelte-1b3w482">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "octicon:goal-24",
      style: "width: 25px; height: 25px;"
    },
    {},
    {}
  )}
            <h2 class="svelte-1b3w482">Flexible</h2></div>

        <p class="svelte-1b3w482">Leverage the services you want, no more no less. Get started today
            without even needing an API key, and use our publicly available
            data. Later, you can register for an API key once you want access to
            more features (security, scale, etc)
        </p></div>
</div>`;
});
const VideoSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-10knjt4.svelte-10knjt4::before,.svelte-10knjt4.svelte-10knjt4::after,.svelte-10knjt4.svelte-10knjt4{padding:0;margin:0;box-sizing:border-box}.video_section.svelte-10knjt4.svelte-10knjt4{height:100vh;background:whitesmoke;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2em;text-align:center}.video_section.svelte-10knjt4 .video_description.svelte-10knjt4{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1em}.video_section.svelte-10knjt4 .video_description p.svelte-10knjt4{width:40vw;color:#0c3a46;font-size:2rem;margin-bottom:1em;font-weight:bold;line-height:1.2em}.video_section.svelte-10knjt4 .video_container.svelte-10knjt4{position:relative;left:0.8%}@media screen and (max-width: 1200px){.video_section.svelte-10knjt4 .video_container.svelte-10knjt4{position:relative;width:70%;padding-bottom:40%;overflow:hidden}.video_section.svelte-10knjt4 .video_container iframe.svelte-10knjt4{position:absolute;top:0;left:0;width:100%;height:100%}}@media screen and (max-width: 600px){.video_section.svelte-10knjt4 .video_container.svelte-10knjt4{position:relative;width:100%;padding-bottom:56.25%;overflow:hidden;left:-1%}.video_section.svelte-10knjt4 .video_container iframe.svelte-10knjt4{position:absolute;top:0;left:0;width:100%;height:100%}}",
  map: null
};
const VideoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="video_section svelte-10knjt4"><div class="video_description svelte-10knjt4">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:video-duotone",
      style: "width: 120px; height: 120px; color:#258ea8; opacity:50%",
      class: "icon"
    },
    {},
    {}
  )}
        <p class="svelte-10knjt4">Learn more about our Platform</p></div>

    <div class="video_container svelte-10knjt4"><iframe id="videoFrame"${add_attribute("width", 670, 0)}${add_attribute("height", 380, 0)} src="https://www.youtube.com/embed/gjBxFPf0DTs?si=4HlILChW7lLOrpZp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="svelte-10knjt4"></iframe></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-18gf40f::before,.svelte-18gf40f::after,.svelte-18gf40f{padding:0;margin:0;box-sizing:border-box}.landing_page_overlay.svelte-18gf40f{height:100vh;width:100vw;background-color:#0c3a46}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="landing_page_overlay svelte-18gf40f">${validate_component(LandingSection, "LandingOverview").$$render($$result, {}, {}, {})}
 ${validate_component(GetStartedSection, "LandingSection").$$render($$result, {}, {}, {})}
 ${validate_component(OurFeatureSection, "AboutSection").$$render($$result, {}, {}, {})}
 ${validate_component(VideoSection, "VideoSection").$$render($$result, {}, {}, {})}
 ${validate_component(FooterSection, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
