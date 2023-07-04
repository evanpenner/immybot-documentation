(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{459:function(e,t,o){"use strict";o.r(t);var a=o(23),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frequently-asked-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),o("h2",{attrs:{id:"do-i-need-a-separate-usb-installer-per-tenant"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-a-separate-usb-installer-per-tenant"}},[e._v("#")]),e._v(" Do I need a separate USB/Installer per tenant?")]),e._v(" "),o("p",[e._v("No. Create a USB pointing to your own tenant (or create an “Onboarding” tenant) and don’t select the Auto-Onboard option.")]),e._v(" "),o("p",[e._v("You will change the tenant of the computer on the Onboarding area of the computer after it comes into New Computers")]),e._v(" "),o("h2",{attrs:{id:"will-immybot-start-doing-anything-without-my-consent-like-when-i-save-a-deployment-will-it-automatically-deploy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#will-immybot-start-doing-anything-without-my-consent-like-when-i-save-a-deployment-will-it-automatically-deploy"}},[e._v("#")]),e._v(" Will ImmyBot start doing anything without my consent? Like when I save a deployment, will it automatically deploy?")]),e._v(" "),o("p",[e._v("ImmyBot does not deploy anything automatically. You can feel safe saving your Deployments. Think of them like documenting how things SHOULD be. If you want Immy to automatically enforce deployments, you would need the Immy Deploy plan which allows you to create schedules.")]),e._v(" "),o("p",[e._v("Think of it like if Group Policy only updated if you manually ran gpupdate /force or otherwise specified a schedule for the gpupdates to happen. We understand that updating and installing software on existing computers can be intrusive to the user which is why we schedule these actions out and give the user the ability to postpone via interactive emails.")]),e._v(" "),o("p",[e._v("IMPORTANT: If you setup integration with your RMM, when you map an RMM client to an ImmyBot tenant, ImmyBot will begin running inventory scripts on those machines every 24 hours. These scripts are read-only, but if you have aggressive monitoring software it may cause false alarms.")]),e._v(" "),o("h2",{attrs:{id:"what-if-i-don-t-know-which-user-will-be-using-the-computer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-if-i-don-t-know-which-user-will-be-using-the-computer"}},[e._v("#")]),e._v(" What if I don’t know which user will be using the computer?")]),e._v(" "),o("p",[e._v("Do your best to find out, or assign machines to specific users ahead of time. Without this, user level customizations are impossible. However, you may find yourself in a shared-computer scenario where every computer gets the same 365 applications. Simply create a deployment for those 365 applications for all computers under that tenant.")]),e._v(" "),o("h2",{attrs:{id:"can-immy-join-azuread"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-immy-join-azuread"}},[e._v("#")]),e._v(" Can Immy join AzureAD?")]),e._v(" "),o("p",[e._v("Yes. Create a deployment for the Join AzureAD task. We use the bulk enrollment technique and generate a provisioning package to join the machine to AzureAD. At the time of writing, this requires you to create a user in each customer’s tenant. We plan to remove this requirement in the future.")]),e._v(" "),o("h2",{attrs:{id:"my-azuread-join-action-is-failing-what-are-some-common-fixes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#my-azuread-join-action-is-failing-what-are-some-common-fixes"}},[e._v("#")]),e._v(" My AzureAD Join action is failing, what are some common fixes?")]),e._v(" "),o("p",[e._v("Check if MFA Requirement for Joining is enabled via "),o("a",{attrs:{href:"https://portal.azure.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conditional Access"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://portal.azure.com/#view/Microsoft_AAD_Devices/DevicesMenuBlade/~/DeviceSettings/menuId~/null",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Device Settings"),o("OutboundLink")],1),e._v("."),o("br"),e._v("\nMFA requirement for all users in "),o("a",{attrs:{href:"https://portal.azure.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conditional Access"),o("OutboundLink")],1),e._v(" will also block the execution, as the package_XXX user will encounter a MFA prompt.\nMost other situations are noted during execution failure.")]),e._v(" "),o("h2",{attrs:{id:"can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments"}},[e._v("#")]),e._v(" Can Immy help migrate my customers to AzureAD from On-Premises environments?")]),e._v(" "),o("p",[e._v("Yes, we have a "),o("a",{attrs:{href:"#task"}},[e._v("Task")]),e._v(" that can migrate machines to associate the user’s profile to their Azure AD identity and join the machine to Azure AD. It can also do the same to and from Active Directory")]),e._v(" "),o("h2",{attrs:{id:"domain-join-didn-t-work-what-gives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain-join-didn-t-work-what-gives"}},[e._v("#")]),e._v(" Domain Join didn’t work, what gives?")]),e._v(" "),o("p",[e._v("Make sure there is a Domain Controller in Immy for the machine. If you are using a supported RMM like CW Automate/Control setup the integration so the Domain Controller is imported automatically. Otherwise, you’ll need to install the ImmyAgent on a domain controller for that customer.")]),e._v(" "),o("p",[e._v("If the Domain Controller doesn’t have the red “Domain Controller” designation, press “Run Inventory”. This may happen if it was recently added to ImmyBot.")]),e._v(" "),o("p",[e._v("Pay attention to the script output, Immy may be reporting that there is a name collision, or that it was unable to run scripts on the domain controller, usually due to security software.")]),e._v(" "),o("h2",{attrs:{id:"why-are-my-computers-stuck-in-identification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-are-my-computers-stuck-in-identification"}},[e._v("#")]),e._v(" Why are my computers stuck in "),o("a",{attrs:{href:"#identification"}},[e._v("Identification")])]),e._v(" "),o("ol",[o("li",[e._v("The machine has a security tool like Defender for Endpoint, Crowdstrike, Bitdefender or Threatlocker blocking our scripts from running")])]),e._v(" "),o("ul",[o("li",[e._v("You'll want to create exclusions for ImmyBot")])]),e._v(" "),o("ol",[o("li",[e._v("WMI is broken on the machine (Usually on older machines)")])]),e._v(" "),o("h2",{attrs:{id:"can-you-target-devices-in-azure-groups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-you-target-devices-in-azure-groups"}},[e._v("#")]),e._v(" Can you target devices in Azure Groups?")]),e._v(" "),o("p",[e._v("Yes, but ImmyBot requires an additional permission on the ImmyBot app registration. You need to grant the "),o("code",[e._v("Microsoft Graph - Devices.Read.All")]),e._v(" permission in order for devices to be pulled from Azure Groups.")]),e._v(" "),o("h2",{attrs:{id:"how-do-i-uninstall-the-immyagent"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-uninstall-the-immyagent"}},[e._v("#")]),e._v(" How do I uninstall the ImmyAgent?")]),e._v(" "),o("p",[e._v("Run the following from Command Line")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('wmic product where name="ImmyBot Agent" call uninstall /nointeractive\n')])])]),o("p",[e._v("Or")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('MsiExec.exe /X "{BF77AD97-A742-43D3-9940-CF7B8374D0EF}" /qn /norestart\n')])])]),o("h2",{attrs:{id:"how-are-we-able-to-define-which-version-of-windows-is-installed-during-the-initial-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-are-we-able-to-define-which-version-of-windows-is-installed-during-the-initial-setup"}},[e._v("#")]),e._v(" How/are we able to define which version of Windows is installed during the initial setup?")]),e._v(" "),o("p",[e._v("ImmyBot doesn't install Windows on bare metal. The workflow is you unbox the system from Dell, HP, Lenovo, Microsoft, or your manufacturer of choice and insert the USB with the ImmyBot.ppkg file at the root while the machine is at the out of box screen.")]),e._v(" "),o("p",[e._v("We don't image the machine, we script the factory image into compliance.")]),e._v(" "),o("p",[e._v("We can, however, install Feature Updates during Onboarding (as well as after Onboarding)")]),e._v(" "),o("h2",{attrs:{id:"since-immy-bot-doesn-t-use-an-iso-does-it-require-a-device-to-have-the-ability-to-have-2-usb-devices-plugged-in-one-for-a-windows-iso-and-one-for-the-immybot-ppkg"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#since-immy-bot-doesn-t-use-an-iso-does-it-require-a-device-to-have-the-ability-to-have-2-usb-devices-plugged-in-one-for-a-windows-iso-and-one-for-the-immybot-ppkg"}},[e._v("#")]),e._v(" Since Immy.Bot doesn’t use an ISO, does it require a device to have the ability to have 2 USB devices plugged in? One for a Windows ISO and one for the ImmyBot ppkg?")]),e._v(" "),o("p",[e._v("If you want to wipe the computer you can use the Media Creation Tool to create a Windows Setup flash drive and then put our .ppkg file on it. After installing Windows, it will automatically apply the .ppkg")]),e._v(" "),o("h2",{attrs:{id:"does-immy-rely-on-the-windows-preboot-for-drivers-during-initial-deployment-or-does-the-immybot-agent-installer-have-drivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#does-immy-rely-on-the-windows-preboot-for-drivers-during-initial-deployment-or-does-the-immybot-agent-installer-have-drivers"}},[e._v("#")]),e._v(" Does Immy rely on the Windows preboot for drivers during initial deployment, or does the ImmyBot agent installer have drivers?")]),e._v(" "),o("p",[e._v("Since we are working with the manufacturer's image, all drivers are typically installed. We will automatically install Dell, HP, and Lenovo driver and BIOS updates via those manufacturer's tools (Dell Command, HP Image Assistant, Lenovo System Update)")]),e._v(" "),o("h2",{attrs:{id:"does-immy-s-setup-process-support-a-usb-nic-for-wifi-if-so-how-do-we-present-those-drivers-to-immy-or-do-we-even-need-to"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#does-immy-s-setup-process-support-a-usb-nic-for-wifi-if-so-how-do-we-present-those-drivers-to-immy-or-do-we-even-need-to"}},[e._v("#")]),e._v(" Does Immy’s setup process support a USB NIC for WiFi?  If so, how do we present those drivers to Immy, or do we even need to?")]),e._v(" "),o("p",[e._v("I've found Windows has built in drivers for most USB NICs. If yours doesn't have drivers built into Windows, I'd suggest purchasing one that does.")]),e._v(" "),o("h2",{attrs:{id:"sentinelone-how-do-we-define-which-site-immy-bot-places-the-agent-in-during-installation-of-the-s1-agent"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sentinelone-how-do-we-define-which-site-immy-bot-places-the-agent-in-during-installation-of-the-s1-agent"}},[e._v("#")]),e._v(" SentinelOne - How do we define which site Immy.Bot places the agent in during installation of the S1 agent?")]),e._v(" "),o("p",[e._v("Supply ImmyBot with an API Key to SentinelOne, and Immy will look for a Site in your SentinelOne instance that matches the name of the Tenant you are onboarding the computer for.")]),e._v(" "),o("h2",{attrs:{id:"are-there-any-repository-limits-for-software-deployments-either-to-the-size-of-custom-software-or-number-of-custom-installers-we-can-upload"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#are-there-any-repository-limits-for-software-deployments-either-to-the-size-of-custom-software-or-number-of-custom-installers-we-can-upload"}},[e._v("#")]),e._v(" Are there any repository limits for software deployments?  Either to the size of custom software or number of custom installers we can upload?")]),e._v(" "),o("p",[e._v("There are currently no limits. Everything you upload goes into an Azure Storage Account created just for your ImmyBot instance. Don't be the reason we can't have nice things.")]),e._v(" "),o("h1",{attrs:{id:"for-computer-rename-are-there-any-other-operators-we-can-use-when-naming-devices-other-then-the-ones-shown-can-we-add-operators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#for-computer-rename-are-there-any-other-operators-we-can-use-when-naming-devices-other-then-the-ones-shown-can-we-add-operators"}},[e._v("#")]),e._v(" For computer rename, are there any other operators we can use when naming devices other then the ones shown? Can we add operators?")]),e._v(" "),o("p",[e._v("You can duplicate the Task into your instance an manipulate it however you like. If it's something you think other MSPs could use, I'd encourage you to submit a ticket to support@immy.bot and we can add it.")]),e._v(" "),o("h2",{attrs:{id:"employee-profile-caching-during-on-boarding-is-this-supported-if-so-how"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#employee-profile-caching-during-on-boarding-is-this-supported-if-so-how"}},[e._v("#")]),e._v(" Employee profile caching during on-boarding - is this supported?  If so/how?")]),e._v(" "),o("p",[e._v('ImmyBot will create a profile for the Primary Person you selected for this machine on the Onboarding screen (It does this via the "Create Profile for Primary Person" task)')]),e._v(" "),o("p",[e._v("We do this so subsequent tasks that set user level settings like default PDF handler and default browser, have the profile for the primary person and thus that user's HKCU where those settings live.")]),e._v(" "),o("h2",{attrs:{id:"for-purchasing-immy-do-you-guys-prefer-credit-card-or-invoice-would-you-rather-us-pay-monthly-or-can-we-pay-all-upfront"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#for-purchasing-immy-do-you-guys-prefer-credit-card-or-invoice-would-you-rather-us-pay-monthly-or-can-we-pay-all-upfront"}},[e._v("#")]),e._v(" For purchasing Immy, do you guys prefer Credit card or invoice? Would you rather us pay monthly, or can we pay all upfront?")]),e._v(" "),o("p",[e._v("We prefer monthly credit card or ACH.")]),e._v(" "),o("h2",{attrs:{id:"is-immy-able-to-group-devices-and-then-do-role-based-deployments-to-them-i-assume-this-is-done-by-tags"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#is-immy-able-to-group-devices-and-then-do-role-based-deployments-to-them-i-assume-this-is-done-by-tags"}},[e._v("#")]),e._v(" Is Immy able to group devices and then do role based deployments to them? I assume this is done by tags?")]),e._v(" "),o("p",[e._v("Yes, you would accomplish this with tags")]),e._v(" "),o("h2",{attrs:{id:"bitlocker-does-this-write-the-key-to-azure-ad-by-chance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bitlocker-does-this-write-the-key-to-azure-ad-by-chance"}},[e._v("#")]),e._v(" BitLocker - does this write the key to Azure AD by chance?")]),e._v(" "),o("p",[e._v("Yes, but we can't verify that it is written to Azure AD as that would require additional privileges that our App Registration doesn't request.")]),e._v(" "),o("p",[e._v("We also write the Bitlocker Recovery Key to Active Directory for Domain Joined machines. This doesn't require any Group Policy setup, or line of site to the domain controller. This works as long as the machine is joined to a domain and there is a domain controller for that domain in ImmyBot.")]),e._v(" "),o("h2",{attrs:{id:"is-immy-able-to-reset-windows-wipe-and-reload-a-computer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#is-immy-able-to-reset-windows-wipe-and-reload-a-computer"}},[e._v("#")]),e._v(" Is Immy able to reset Windows / Wipe and Reload a computer?")]),e._v(" "),o("p",[e._v("Yes, the current process will be simplified but here's how to do it:")]),e._v(" "),o("ol",[o("li",[e._v("Click Download ImmyAgent on the left to create a PPKG with the Windows Reset option selected")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://user-images.githubusercontent.com/1424395/235902691-46845e47-2965-4141-a68c-2004a02b7300.png",alt:"image"}})]),e._v(" "),o("p",[o("img",{attrs:{src:"https://user-images.githubusercontent.com/1424395/235902014-4a63dc2f-efe3-454c-a2f4-5c6578190982.png",alt:"image"}})]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v('Create a Deployment for "Apply Provisioning Package (PPKG)" to deploy the PPKG to the specified machine')])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://user-images.githubusercontent.com/1424395/235902286-5ad3303e-167c-4cd4-abb6-5dea45da3600.png",alt:"image"}})]),e._v(" "),o("h2",{attrs:{id:"immybot-agent-logs-show-an-error-of-the-specified-sas-token-is-expired"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#immybot-agent-logs-show-an-error-of-the-specified-sas-token-is-expired"}},[e._v("#")]),e._v(' ImmyBot Agent logs show an error of "The specified SAS token is expired"')]),e._v(" "),o("p",[e._v("This will occur if the device's system time is incorrect.  Ensure that the system time is correct and then restart the ImmyBot Agent Service.")]),e._v(" "),o("h2",{attrs:{id:"what-are-trusted-manufacturers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-trusted-manufacturers"}},[e._v("#")]),e._v(" What are trusted manufacturers?")]),e._v(" "),o("p",[e._v("Dell, HP, and Lenovo are considered trusted manufacturers.  A trusted manufacturer is expected to provide unique serial numbers for their devices. We rely on trusted manufactuers and device serial numbers during device identification.  If the agent reports it comes from a trusted manufacturer and a computer already exists inside ImmyBot with the same manufacturer and serial number, then we will automatically associated the agent with the existing computer.")])])}),[],!1,null,null,null);t.default=i.exports}}]);