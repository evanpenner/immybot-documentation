import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.392dd896.js";const n="/assets/2020-12-07-15-46-18.185cc4dd.png",r="/assets/2020-12-07-15-47-07.bab69313.png",i="/assets/2022-12-12_10-42-55.9830df58.png",s="/assets/2020-12-07-15-47-33.3ead858d.png",m="/assets/2021-08-16-13-19-15.d1b0d8c1.png",c="/assets/2021-08-16-13-20-45.f3ca920e.png",l="/assets/2021-08-16-13-23-26.7a130ee3.png",P=JSON.parse('{"title":"AzureAD/365 Graph Permissions","description":"","frontmatter":{},"headers":[],"relativePath":"azure-graph-permissions-setup.md","filePath":"azure-graph-permissions-setup.md"}'),p={name:"azure-graph-permissions-setup.md"},u=o('<h1 id="azuread-365-graph-permissions" tabindex="-1">AzureAD/365 Graph Permissions <a class="header-anchor" href="#azuread-365-graph-permissions" aria-label="Permalink to &quot;AzureAD/365 Graph Permissions&quot;">​</a></h1><p>Your first ImmyBot tenant will be automatically linked to the Azure tenant that you signed up for ImmyBot with. You can link other ImmyBot tenants to Azure from the tenant Azure tab.</p><h2 id="linking-to-an-azure-tenant" tabindex="-1">Linking to an Azure Tenant <a class="header-anchor" href="#linking-to-an-azure-tenant" aria-label="Permalink to &quot;Linking to an Azure Tenant&quot;">​</a></h2><p>After creating an ImmyBot tenant, link it to an Azure tenant by navigating to the Azure tab in ImmyBot and entering the Azure tenant&#39;s principal id or domain and clicking <code>Save</code>.</p><h2 id="azure-permission-level" tabindex="-1">Azure Permission Level <a class="header-anchor" href="#azure-permission-level" aria-label="Permalink to &quot;Azure Permission Level&quot;">​</a></h2><p>Once your ImmyBot tenant has been linked to Azure, you can set the <strong>Azure Permission Level</strong> from the tenant Azure tab. This allows ImmyBot to:</p><ol><li>Sync all users from the Azure tenant</li><li>Sync all users from your customer&#39;s tenants (if your Azure tenant is a Partner tenant)</li><li>Install the 365 applications a user is licensed for (Apps for business/Apps for entrprise/Project/Visio)</li><li>Deploy software to Teams, On-Premises Security Groups (Ex. Everyone in the Engineering Team gets AutoCAD 2022)</li></ol><p>The <strong>Azure Permission Level</strong> has two modes: <em>Default</em> and <em>Custom</em></p><p><strong>NB: In both the <em>Default</em> and <em>Custom</em> modes, you must manually provide consent for each customer you want to sync!</strong><br><strong>NB: When consenting to an Azure customer, you must authenticate using an administrator account from that customer!</strong><br> Consent can be initiated from within ImmyBot by clicking on the <code>Consent</code> (or <code>Reconsent</code>) button for the customer on either the Azure Settings page or on the Azure tab of the ImmyBot tenant linked to the customer.</p><h3 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;Default&quot;">​</a></h3><p>In this mode, you don&#39;t need to create an app registration. You consent as an administrator, allowing ImmyBot access users in your tenant and your customers tenants (if you have established GDAP relationships with your customers and have consented with an admin from that customer).</p><h3 id="custom" tabindex="-1">Custom <a class="header-anchor" href="#custom" aria-label="Permalink to &quot;Custom&quot;">​</a></h3><p>In this mode, you create an App Registration and provide its Application (client) Id and Secret to ImmyBot, allowing you to customize the permissions Immy has to you and your customer&#39;s environments.</p><h4 id="create-an-app-registration" tabindex="-1">Create an App Registration <a class="header-anchor" href="#create-an-app-registration" aria-label="Permalink to &quot;Create an App Registration&quot;">​</a></h4><p>Navigate to: <a href="https://aad.portal.azure.com/" target="_blank" rel="noreferrer">https://aad.portal.azure.com/</a></p><p><img src="'+n+'" alt=""></p><p><img src="'+r+'" alt=""></p><p><img src="'+i+'" alt=""></p><p><strong>Important!</strong> Your app registration must have a Web redirect uri of <code>https://&lt;your-domain&gt;.immy.bot/consent-callback</code>, replacing <code>&lt;your-domain&gt;</code> appropriately</p><h4 id="grant-permissions" tabindex="-1">Grant Permissions <a class="header-anchor" href="#grant-permissions" aria-label="Permalink to &quot;Grant Permissions&quot;">​</a></h4><p>See the screenshots below for the minimum permissions.</p><p><img src="'+s+'" alt=""></p><p><img src="https://github.com/immense/immybot-documentation/assets/1424395/24640a0d-b078-4575-8125-e035788f06e8" alt="image"></p><p><img src="https://github.com/immense/immybot-documentation/assets/1424395/f5c4ec0f-35f2-49ad-a690-7e940c187d0a" alt="image"></p><h4 id="create-client-secret" tabindex="-1">Create Client Secret <a class="header-anchor" href="#create-client-secret" aria-label="Permalink to &quot;Create Client Secret&quot;">​</a></h4><p><img src="'+m+'" alt=""></p><p><img src="'+c+'" alt=""></p><p><img src="'+l+'" alt=""></p><h4 id="assign-gdap-permissions-to-immybot-service-principal" tabindex="-1">Assign GDAP Permissions to ImmyBot Service Principal <a class="header-anchor" href="#assign-gdap-permissions-to-immybot-service-principal" aria-label="Permalink to &quot;Assign GDAP Permissions to ImmyBot Service Principal&quot;">​</a></h4><ul><li>Create a Security Group in Azure AD called &quot;ImmyBot Security Group&quot;</li><li>Add the ImmyBot Service Principal to that group</li><li>For each customer in the Partner Center, add the &quot;ImmyBot Security Group&quot; and add the &quot;Directory Readers&quot; and &quot;Global Reader&quot; role.</li></ul><h4 id="copy-the-application-client-id-and-client-secret-value-into-the-form-in-immybot" tabindex="-1">Copy the <code>Application (client) ID</code> and <code>Client Secret Value</code> into the form in ImmyBot. <a class="header-anchor" href="#copy-the-application-client-id-and-client-secret-value-into-the-form-in-immybot" aria-label="Permalink to &quot;Copy the `Application (client) ID` and `Client Secret Value` into the form in ImmyBot.&quot;">​</a></h4>',31),h=[u];function d(g,y,f,b,A,_){return t(),a("div",null,h)}const I=e(p,[["render",d]]);export{P as __pageData,I as default};
