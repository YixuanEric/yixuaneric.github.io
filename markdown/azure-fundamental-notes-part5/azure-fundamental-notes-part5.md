# Azure Subscriptions

When you sign up for Azure, you are creating a subscription

Authenticates & Authorizes users so they can access Azure products

An account can have one subscription or multiple subscriptions.

When used as a a billing boundary. a subscription determines how an Azure account is billed for Azure usage

You can use Azure subscription as access control boundaries because Azure applies access-management policies at the subscription level

# Subscription Options

-   Free Account
    12 months of free access to many popular services

-   pay as you go
    allows you to pay only for what you use

-   member offer
    offers made available to those with existing memberships to certain Microsoft products and services

# Organization Structure

-   Management Groups
    containers that help you manage access, policy, and compliance for multiple subscriptions

    10000 management groups can be supported

-   Subscriptions
    groups together user account and resources that have been created by those user accounts

-   Resource Group
    logical group is a logical container that you deploy resources to

-   Resources
    Specific service instance like Azure VMs

## Planning & Managing costs

-   Enterprise Customer

Typically signs an Enterprise Agreement with Azure Commits to spending a negotiated amount

-   Web Direct Customer

Pays public prices for Azure resources
Pays for services monthly, via the Azure website

-   Cloud Solution Providers

Usually Microsoft partners that organization hire
Customers pay CSP directly for services

## Factors that Affect Costs

-   Resource Type

Because Azure costs are resource-specific, the usage that Azure tracks will depend on the resource type

-   Service

Azure usage rates, and billing periods, will sometimes differ between Enterprise, Web Direct, and CSP customers

-   Location

Because Azure infrastructure is globally distributed, there will be instances where usage
costs vary between locations.

## Zones for Billing Purposes

Four Zones: Zone 1, Zone 2, Zone 3, DE Zone 1

## Azure Pricing Calculator

Used to estimate the cost of different Azure products

## TCO Calculator

Total cost of ownership calculator

Allows you to estimate cost savings that you can realize by migrating your workloads to Azure

Define Workloads, Adjust Assumptions, View Report

## Minimizing Costs

-   Cost Analysis

    Use the Azure Pricing Calculator and the TCO Calculator

-   Monitor Usage

    Azure Advisor identifies unused and under-utilized resources

-   Spending Limits

    Designed to help prevent your from exhausting the credit on your account
    Not available for pay-as-you-go

-   Reservations

    Discounted prices on certain products/resources if you pay in advance

-   Locations/Regions

    Choose lower-cost locations and regions when deploying resources

-   Cost-Saving Offers

    Stay up-to-date with the latest Azure customer and subscription offers

-   Leverage Tags

    Apply tags to resources and use those tags to organize billing data

## Cost Management

A set of tools that you use to monitor allocate, optimize your Azure costs

# Azure Support Options

## Support Plan Options

All Azure subscriptions include free access to billing and subscription support, Azure products and services documentation, online self-help documentation, white papers, and community support forums.

-   Basic Support
-   Developer Support
-   Standard Support
-   Professional Support

The type of Azure customer you are determines what support plans you can select and how you are billed for them.

## Alternative Support Channels

MSDN Azure Forums
Stack Overflow
Server Fault
Azure General Feedback
AzureSupport Twitter

## Knowledge Center

Searchable Database contains answers to many questions

# Service Level Agreement

SLAs are formal documents that detail the performance standards that apply to Azure products and services

There are separate SLAs for many individual Azure products and services

SLAs also define performance standard AND what happens if a service or product fails to meet the designated availability commitments

Performance targets are outlined in Service Level Agreements

Performance-targets range form 99.9% to 99.99%

Service Level Agreements also describe how Microsoft will respond in the event of an Azure product or service failure that results in a missed SLA

does not offer SLA for free products

## Application SLAs

Azure customer can use Application SLAs to evaluate how their own Azure solutions are meeting their business requirements

When you crate an Application SLA, you should identify workloads that the SLA will apply to, and you should plan for usage patterns

Because usage patterns of your solution will play a role in the SLA requirements that you define, you should identify differences in requirements during critical & non-critical periods.

On the flip side, you should minimize costs during non-critical periods by running the application in a single region

## MTTR

Mean Time To Recover
The average time it takes to restore a component or service after a failure occurs

## MTBF

Mean Time Between Failures
the length of time that you can reasonably expect a component to last between outages

## RTO

Recovery Time Objective
refers to the maximum acceptable time that an application or service can be unavailable after a failure

## RPO

Recovery Point Objective
Defines the maximum duration of data loss that is acceptable during a disaster

# Service Life cycle in Azure

## Public and Private Preview features

Microsoft offers previews of certain Azure services, features, and functionality. Through Azure Previews, you can test these pre-release offerings.

-   Private Preview
    an Azure feature available to certain Azure customers for evaluation purposes
-   Public Preview
    an Azure feature available to all Azure customers for evaluation purposes

Although an Azure service my be available in preview, it may not be ready for production deployments
