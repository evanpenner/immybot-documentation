import{_ as r,C as d,o as i,c as h,b as o,w as t,a0 as s,k as e,a,Q as u,H as n}from"./chunks/framework.392dd896.js";const B=JSON.parse('{"title":"Getting Started / Thinking with Immy","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md"}'),p={name:"getting-started.md"},c=e("h1",{id:"getting-started-thinking-with-immy",tabindex:"-1"},[a("Getting Started / Thinking with Immy "),e("a",{class:"header-anchor",href:"#getting-started-thinking-with-immy","aria-label":'Permalink to "Getting Started / Thinking with Immy"'},"​")],-1),m=e("p",null,[e("strong",null,"The goal of ImmyBot is to setup a computer knowing only the customer and the end user.")],-1),f=e("p",null,'Thinking with Immy means thinking in terms of how things "Should" be.',-1),g=e("p",null,'You teach Immy how things "should" be by creating Deployments.',-1),b=e("p",null,'How things "Should" be is often dependent on external factors. For example',-1),y=e("ul",null,[e("li",null,"Customer A should have SentinelOne because they pay for it"),e("li",null,"Person A should have Visio 365 because he has a license for it")],-1),_=e("p",null,"Luckily, deployments can be conditionally applied based on the result of scripts that reach out to external sources",-1),A=u('<p>This is out of the box functionality in ImmyBot. I&#39;m just showing you how it works to illustrate the power of the rules engine.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>ImmyBot deploys 2 things:</p><ol><li>Software</li><li>Tasks</li></ol><p>Tasks are for anything that isn’t software, think Bitlocker, Power Options, etc.</p><ul><li>You can use Tasks to configure software by selecting a &quot;Configuration Task&quot; for the software</li><li>Configuration Tasks are useful for configuring the application (even if the application wasn&#39;t installed by ImmyBot)</li><li>Configuration Tasks run after Immy determines the software is installed</li><li>Configuration Task parameters are available in all scripts related to the software</li></ul><p>ImmyBot tests everything it does before and after it does it.</p><ul><li>Software <ul><li>Version Detection - Runs before install to determine if installation is necessary, and after to verify the desired version is installed <ul><li>DisplayName <ul><li>Contains</li><li>Regex</li><li>Traditional (Wildcard *)</li></ul></li><li>UpgradeCode (For MSI based installs)</li><li>Script <ul><li>Must return a version or null</li></ul></li></ul></li><li>Test Script - If software is installed, the failure of this test (the test script returning $false) will trigger a &quot;Repair&quot; action (default Uninstall/Install) of the application <ul><li>Example: Check to verify Foxit PDF Editor is the Preview handler extension is working in Windows Explorer, reinstalling the PDF Editor usually corrects this scenario</li></ul></li></ul></li><li>Tasks <ul><li>Test script (When using separate scripts)</li><li>Combined script returns $false when $method is &#39;test&#39;</li></ul></li></ul><h3 id="example-adobe-reader" tabindex="-1">Example: Adobe Reader <a class="header-anchor" href="#example-adobe-reader" aria-label="Permalink to &quot;Example: Adobe Reader&quot;">​</a></h3><p>We find that most MSPs install Adobe Reader by default so ImmyBot includes a Recommended Deployment that states</p><ul><li>&quot;the latest version of Adobe Reader should be installed for all Workstations and Portable Devices&quot;</li></ul><p>When this rule applies (i.e. it isn&#39;t disabled or overridden by a more specific rule) ImmyBot will do the following:</p><ol><li>Find the latest available version of Adobe Reader by running the Adobe Reader &quot;dynamic version&quot; script that uses a public API to return the latest full version number of Adobe Reader, as well as the URL to download it, the latest patch version of Adobe Reader, and the URL to download it.</li><li>Determine the installed version (if any) by looking for Adobe Reader in Add/Remove Programs on the machine</li><li>Queue an Install or Upgrade task (depending on the previous step)</li><li>Set Adobe Reader to be the default PDF handler by running the &quot;configuration task&quot; that verifies that Reader is the default handler for .PDF files for each user on the machine.</li></ol>',13);function w(k,v,S,D,I,T){const l=d("Mermaid");return i(),h("div",null,[c,m,f,g,(i(),o(s,null,{default:t(()=>[n(l,{id:"mermaid-12",class:"eita",graph:"graph%20LR%0Asubgraph%20%22Deployment%22%0A%20%20%20%20Input%5B%22Software%20or%20Task%22%5D%20--%3E%7C%22Should%20Be%22%7C%20DesiredState%5B%22Desired%20State%22%5D%20--%3E%7Con%7C%20Group%5B%22One%20or%20More%20Computers%22%5D%0Aend%0A"})]),fallback:t(()=>[a(" Loading... ")]),_:1})),(i(),o(s,null,{default:t(()=>[n(l,{id:"mermaid-13",class:"eita",graph:"graph%20LR%0Asubgraph%20%22Adobe%20Reader%22%0A%20%20%20%20Input1%5B%22Adobe%20Reader%22%5D%20--%3E%7C%22Should%20Be%22%7C%20DesiredState1%5B%22Installed%22%5D%20--%3E%7Con%7C%20Group1%5B%22All%20Workstations%20and%20Portable%20Devices%22%5D%0Aend%0A"})]),fallback:t(()=>[a(" Loading... ")]),_:1})),b,y,_,(i(),o(s,null,{default:t(()=>[n(l,{id:"mermaid-32",class:"eita",graph:"graph%20LR%0Asubgraph%20%22Should%20Deployment%20Apply%3F%22%0A%20%20%20%20Input%20--%3E%20Metascript%0A%20%20%20%20Metascript%20--%3E%20True%0A%20%20%20%20Metascript%20--%3E%20False%0Aend%0A"})]),fallback:t(()=>[a(" Loading... ")]),_:1})),(i(),o(s,null,{default:t(()=>[n(l,{id:"mermaid-33",class:"eita",graph:"graph%20LR%0Asubgraph%20%22Should%20Visio%20Install%3F%22%0A%20%20%20%20EndUser%5B%22Input%3A%20End%20User%22%5D%20--%3E%20Script%5B%22Graph%20API%20Script%3A%20Does%20End%20User%20have%20Visio%20License%3F%22%5D%0A%20%20%20%20Script%20--%3E%20True1%5BTrue%5D%0A%20%20%20%20Script%20--%3E%20False1%5BFalse%5D%0Aend%0A"})]),fallback:t(()=>[a(" Loading... ")]),_:1})),A])}const C=r(p,[["render",w]]);export{B as __pageData,C as default};
