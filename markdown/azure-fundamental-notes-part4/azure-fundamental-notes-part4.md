## Securing Network Connectivity

A _Defense in Depth_ strategy leverages a series of mechanisms to slow the advances of an attack that's aimed at acquiring unauthorized access to data

## Confidentiality

principle of least privilege

## Integrity

prevention of unauthorized changes to information

## Availability

ensure services remain available to authorized users

## Defense in depth

-   Physical Security
-   Identity and Access
-   Perimeter
-   Network
-   Compute
-   Application

## Azure Firewall

managed network security service in Azure that protects Azure Virtual Network Resources

Uses a static public IP address to represent the virtual network resources behind it

Fully integrated with Azure Monitor

Azure Application Gateway also provides a firewall, called WAF, or Web Application Firewall, which provides centralized, inbound protection for web applications.

## Azure DDoS Protection

slow the application down

Basic tier is automatically enabled in Azure, provides the same defense that Microsoft uses

Standard tier adds mitigation capabilities

## Network Security Groups

Filters network traffic to and from Azure resources connected Azure Virtual Networks

Consists of inbound and outbound rules

Supports as many rules as necessary, within subscription limits

A default set of baseline security rules is created within the NSG.

## Application Security Groups

Configure network security as an extension of an application's structure

Reuse your security policies at scale

Azure handles the complexity of explicit IP addresses and multiple rule sets

### When designing an Azure security solution, it's important to consider all aspects of defense in depth, beginning with the perimeter layer.

The Perimeter Layer protects network boundaries using Azure DDoS Protection and Azure Firewall

The Network Layer only allows traffic to pass between networked resources inbound and outbound rules defined

## Core Azure Identity Services

## Authentication

Identifies the entity seeking access to a resource

Challenges for credentials

Basis for creating secure identity & access control principles

## Authorization

Separate from authentication

Establishes an authenticated entity's level of access

Which data can be accessed, and what can be done with it

## Azure Active Directory

Microsoft's Azure-based identity & access management service

Authentication
Single Sign-On (SSO)
Application Management
Business to Business (B2B)
Business to Customer (B2C)
Device management

## Multi-Factor Authentication

Provides added security for user authentications by requiring two or more elements for authentication.

Limits the impact of stolen credentials

MFA should be enabled wherever possible

# Security Tools & Features

## Azure Security Center

Used to provide threat protection for services in Azure and on-premises

COntinuously monitors all services and performs automatic security assessments

Uses machine learning to detect and block malware

Allows you to whitelist applications that you need to run

Analyze & identify possible inbound attacks and investigate threats

Free tier available with every Azure subscription, limited to assessments and recommendations of Azure resources only

Standard tier has full suite of security-related services and features

Continuous monitoring, treat detection, JIT access control for ports, and other features.

## Azure Key Vault

Stores application secrets in a centralized cloud location, to securely control access permissions, and access logging.

Secret management
Key management
Certificate management
Stores Secrets backed by HSMs

## Azure Information Protection

Automatically by administrators, via defined rules ad conditions
By users - manually
A combination of automatic and manual methods, guided by recommendations

## Azure Advanced Threat Protection

Microsoft's security solution that is used to identify, detects, and investigate advanced threats and compromised identities

Azure ATP Portal is dedicated for monitoring and responding to suspicious activity

Azure ATP Sensors installed directly on domain controllers

Azure ATP Cloud Service runs in Azure

# Azure Governance

## Azure Policy

Used to create, assign, and manage policies that enforce different rules and effects over your resources

Performs evaluations of resources and scan for those that are not compliant

Can even automatically remediate resources and configurations that are non-compliant

## Role-Based Access Control

Provides fine-grained access management for Azure resources

RBAC is Based on the Allow Model

Segregate duties within your team, granting only the specific access that your users need to perform their jobs.

Allow only certain actions at each scope level.

CanNotDelete VS ReadOnly: CanNotDelete can R/W but no D. ReadOnly can only R.

## Azure Blueprints

Used to define repeatable sets of Azure resources that implement and adhere to standards, patterns and requirements.

Resource Manager Templates VS Azure Blueprints

With Azure Blueprints: The relationship between the resources and the Blueprints maintained even after the deployment.

# Monitoring and Reporting

## Azure Tags

Provide Metadata for Azure resources
Logically organize resource into a taxonomy
Consist of a name-value pairs
Help organize billing

### Tag Limitations

Not all resource type support tags
Limited tags amount
Tag name length limitations
Tags are not inherited down into resource groups

## Azure Monitor

Allows you to collect, analyze, and act upon telemetry from both cloud and on-prem environments

Monitoring data that you collect for applications is split out into several buckets or tiers

-   Monitoring Data
    Performance and functionality of code regardless of the platform
-   Guest OS Monitoring Data
    Includes data about the OS which your application you are running
-   Azure Resource Monitoring Data
-   Azure Subscription Monitoring Data
-   Azure Tenant Monitoring Data (Active Directory)

### Diagnostic Settings

As soon as you create an Azure subscription and start deploying resources like virtual machines and web apps, Azure Monitor begins collecting data.

Activity Logs record when resources are created or modifies, and Metrics tell your how resources are performing, along with the resources that they are consuming.

### Enabling Diagnostics

With Azure Monitor, you can extend the data that you're collecting into the operation of the resources by enabling diagnostics and adding an agent to compute resources.

You can enable guest-level monitoring, performance counters, event logs, crash dumps, sinks, and you can configure agent settings.

## Azure Service Health

Provides personalized guidance and support whenever issues with Azure services affect you

-   Azure Status

    Global View of the health of Azure services
    Provides up-to-the-minute information on service availability

-   Service Health

    Customizable dashboard to track the state of your Azure services
    Track active events like ongoing service issues, upcoming planned maintenance, or relevant Health advisories.

-   Azure Resource Health

    Helps you diagnose issues.
    Obtain support when an Azure service issue affects your resources
    Provides you with a comprehensive view of the health status of Azure

### Data monitoring only helps you if you can use it to gain visibility into the operation of your computing environment.

## Analyze

-   Application Insights
-   Azure Monitor for Containers
-   Azure Monitor for VMs
    ...

## Respond

-   Emails and Texts(Alerts)
-   Automated Process (Auto-scale)

## Visualize

-   Charts
-   Dashboards
-   Views

## Integrate

-   Other Azure services can work with Azure Monitor

# Privacy, Compliance and Data Protection

CJIS, CSA STAR, GDPA, HIPAA, ISO/IEC 27018, NIST

### Azure Government

### Azure China 21Vianet
Contracts are signed between customer and 21Vianet