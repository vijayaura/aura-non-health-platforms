(function (root) {
  root.TDO = {
    edition: "October 2026",
    domains: [
      {
        id: "01",
        layer: "Governance",
        title: "Management visibility & reporting",
        summary:
          "One reporting format for every platform. Record development complete, QA complete, UAT approved, and released to production as separate milestones.",
        processes: [
          {
            id: "SOP-001",
            title: "Monthly Business Transaction Metrics Report",
            detail:
              "Month-on-month volumes, transactions, growth, conversion, failures, and platform performance. Define the transaction unit before the number is published.",
          },
          {
            id: "SOP-002",
            title: "Monthly Delivery Report",
            detail:
              "Features and fixes deployed to production, work delivered to UAT, pending items, and delayed commitments. Keep each delivery milestone distinct.",
          },
          {
            id: "SOP-003",
            title: "Monthly Technology Metrics Report",
            detail:
              "Sprint commitment versus completion, defect leakage, deployment frequency, incident count, and resolution time.",
          },
          {
            id: "SOP-004",
            title: "Individual Work & Efficiency Report",
            detail:
              "Work completed, module ownership, review contributions, QA coverage, and blockers resolved. Read results with complexity, support load, dependencies, and review time.",
          },
          {
            id: "SOP-005",
            title: "Module-wise Platform Health Report",
            detail:
              "Status of P&C, Salik–LIVA, and Motor, with dependencies, risks, technical debt, and outstanding issues.",
          },
          {
            id: "SOP-006",
            title: "Next-month Features & Sprint Plan",
            detail:
              "Planned features, sprint-wise deliverables, resource allocation, milestones, and dependencies.",
          },
          {
            id: "SOP-007",
            title: "Risk & Escalation Report",
            detail:
              "Risk description, business impact, owner, mitigation plan, due date, and escalation status.",
          },
          {
            id: "SOP-008",
            title: "Customer Commitments Report",
            detail:
              "Promised dates, client dependencies, UAT commitments, production deadlines, and outstanding dependencies.",
          },
          {
            id: "SOP-009",
            title: "Technical Debt Report",
            detail:
              "Aging technical issues, legacy components, proposed remediation, risk level, and the sprint planned for the work.",
          },
        ],
      },
      {
        id: "02",
        layer: "Governance",
        title: "Team operations & project management",
        summary:
          "The daily lead sync is for decisions, blockers, production issues, and dependencies. The tracker is the source of truth, and work is complete only with acceptance criteria and evidence.",
        processes: [
          {
            id: "SOP-010",
            title: "Daily 30-minute Lead Sync",
            detail:
              "Review the previous day’s commitments, today’s priorities, blockers, production issues, and cross-team dependencies. Leave with owners, not a round-robin status.",
          },
          {
            id: "SOP-011",
            title: "Detailed Project Tracker",
            detail:
              "Every item has an owner, platform, module, priority, status, due date, sprint, and acceptance criteria. No work starts without a ticket.",
          },
          {
            id: "SOP-012",
            title: "Sprint Planning & Review",
            detail:
              "Agree capacity, sprint goal, committed scope, dependencies, and carry-forward. Close the sprint with a demonstration and accepted work.",
          },
          {
            id: "SOP-013",
            title: "Weekly Delivery Review",
            detail:
              "Review sprint progress, scope changes, overdue work, dependencies, release readiness, and the delivery forecast.",
          },
          {
            id: "SOP-014",
            title: "Cross-platform Dependency Management",
            detail:
              "Track shared APIs, common components, environments, resources, and integration dependencies across P&C, Salik–LIVA, and Motor.",
          },
          {
            id: "SOP-015",
            title: "Capacity & Resource Planning",
            detail:
              "Track planned versus actual capacity, leave, support allocation, and critical skill dependencies.",
          },
          {
            id: "SOP-016",
            title: "Change Request Management",
            detail:
              "Assess impact on scope, timeline, cost, architecture, and testing before a change is accepted.",
          },
          {
            id: "SOP-017",
            title: "Decision & Action Register",
            detail:
              "Capture the decision, rationale, decision-maker, date, impacted modules, action owner, deadline, and closure evidence.",
          },
          {
            id: "SOP-018",
            title: "Knowledge Transfer & Ownership",
            detail:
              "Every critical module has a primary owner, a backup owner, and current documentation.",
          },
        ],
      },
      {
        id: "03",
        layer: "Common",
        title: "Software development & code quality",
        summary:
          "Development starts only when the work is ready, and it merges only through peer review, a linked ticket, test evidence, and passing checks. Production branches stay protected.",
        processes: [
          {
            id: "SOP-019",
            title: "Branching & Version Control",
            detail:
              "Standard branch naming, feature branches, release branches where required, and hotfix branches.",
          },
          {
            id: "SOP-020",
            title: "Definition of Ready",
            detail:
              "Approved requirement, acceptance criteria, design or API dependencies, and confirmed testability before development starts.",
          },
          {
            id: "SOP-021",
            title: "Pull Request SOP",
            detail:
              "Mandatory peer review, linked ticket, change summary, test evidence, and impact analysis.",
          },
          {
            id: "SOP-022",
            title: "Code Quality Gates",
            detail:
              "Linting, formatting, unit tests, static analysis, and a successful build before merge.",
          },
          {
            id: "SOP-023",
            title: "Code Review SLA",
            detail:
              "Agreed review turnaround, with escalation when an approval is late.",
          },
          {
            id: "SOP-024",
            title: "Merge & Branch Protection",
            detail:
              "Block direct commits to the production branch and any merge that bypasses required checks.",
          },
          {
            id: "SOP-025",
            title: "Database Change Management",
            detail:
              "Version-controlled migrations, backward compatibility, a rollback strategy, and approval before apply.",
          },
          {
            id: "SOP-026",
            title: "API Development Standards",
            detail:
              "Authentication, validation, a common error format, idempotency, timeout handling, and API versioning.",
          },
          {
            id: "SOP-027",
            title: "Technical Documentation",
            detail:
              "Update architecture diagrams, API specifications, and operational runbooks when a change affects them.",
          },
          {
            id: "SOP-028",
            title: "Technical Debt Management",
            detail:
              "Allocate planned capacity for refactoring, dependency upgrades, and removal of recurring defects.",
          },
        ],
      },
      {
        id: "04",
        layer: "Common",
        title: "QA & release quality",
        summary:
          "Testing is a continuous lifecycle. Set coverage from risk and module criticality. A release stops on unresolved release-blocking defects unless an approved exception is recorded.",
        processes: [
          {
            id: "SOP-029",
            title: "Test Planning & Coverage",
            detail:
              "Test scope, scenarios, environments, dependencies, and entry and exit criteria, scaled to module risk.",
          },
          {
            id: "SOP-030",
            title: "Test Case Management",
            detail:
              "Trace each requirement to its test cases, execution results, and any defect raised.",
          },
          {
            id: "SOP-031",
            title: "Unit & Integration Testing",
            detail:
              "Validate components and the interactions between them against the agreed coverage expectation.",
          },
          {
            id: "SOP-032",
            title: "Regression Testing",
            detail:
              "Run the mandatory regression suite for critical journeys and for modules the change affects.",
          },
          {
            id: "SOP-033",
            title: "API & Contract Testing",
            detail:
              "Validate request and response schemas, compatibility, timeouts, and failure scenarios.",
          },
          {
            id: "SOP-034",
            title: "Negative & Boundary Testing",
            detail:
              "Cover invalid inputs, missing fields, duplicate requests, authorization failures, and boundary values.",
          },
          {
            id: "SOP-035",
            title: "Product Configuration Testing",
            detail:
              "Validate forms, rating calculations, underwriting rules, documents, and product versions before publication.",
          },
          {
            id: "SOP-036",
            title: "Defect Management",
            detail:
              "Record severity, priority, owner, reproducibility, root cause, and retest evidence before closure.",
          },
          {
            id: "SOP-037",
            title: "UAT Management",
            detail:
              "Name the business owner, the scenarios, the sign-off, any open defects, and the documented acceptance.",
          },
          {
            id: "SOP-038",
            title: "Release Quality Gates",
            detail:
              "Hold the release while release-blocking defects remain open. Document any approved exception.",
          },
          {
            id: "SOP-039",
            title: "Post-release Validation",
            detail:
              "Run smoke tests and critical transaction checks, then monitor for production defects.",
          },
        ],
      },
      {
        id: "05",
        layer: "Common",
        title: "Deployment, production & reliability",
        summary:
          "Use one release checklist, a named owner, and a release calendar. The release is complete when critical business journeys have been validated in production.",
        processes: [
          {
            id: "SOP-040",
            title: "Release Planning & Calendar",
            detail:
              "Fix release scope, version, window, deployment owner, and dependencies before the freeze.",
          },
          {
            id: "SOP-041",
            title: "Release Readiness Checklist",
            detail:
              "QA sign-off, regression results, UAT where required, security and configuration checks, database migration, and backup readiness.",
          },
          {
            id: "SOP-042",
            title: "Deployment SOP",
            detail:
              "Execute the approved steps under a named owner and retain execution evidence.",
          },
          {
            id: "SOP-043",
            title: "Environment Management",
            detail:
              "Control configuration across development, QA, UAT, and production. Check environment parity. Use feature flags for high-risk changes where they fit.",
          },
          {
            id: "SOP-044",
            title: "Release Notes & Communication",
            detail:
              "Publish the change, the business impact, and known limitations to the people who need them.",
          },
          {
            id: "SOP-045",
            title: "Rollback & Hotfix SOP",
            detail:
              "Prepare rollback and database recovery before the window. Emergency hotfixes need retrospective approval, testing, and a change-failure review.",
          },
          {
            id: "SOP-046",
            title: "Post-deployment Monitoring",
            detail:
              "Watch application health and validate critical business transactions before the release is closed.",
          },
          {
            id: "SOP-047",
            title: "Release Performance Metrics",
            detail:
              "Track release frequency, change failure rate, and time to recover from a failed release.",
          },
        ],
      },
      {
        id: "06",
        layer: "Common",
        title: "Production support & performance",
        summary:
          "Run one incident path for all three platforms: detect, record, classify, recover, and prevent recurrence. P&C uses the Response Center, with the same ownership model on Salik–LIVA and Motor.",
        processes: [
          {
            id: "SOP-048",
            title: "Alert Monitoring System",
            detail:
              "Alert on availability, latency, error rates, failed jobs, queue backlog, database health, resource use, and certificate expiry.",
          },
          {
            id: "SOP-049",
            title: "Error Forwarding to Jira & Email",
            detail:
              "Forward qualifying errors to the support module, Jira, and email, with deduplication and severity-based routing.",
          },
          {
            id: "SOP-050",
            title: "Integrated Support Module",
            detail:
              "Create the ticket on the affected platform and link P&C cases to Product Support.",
          },
          {
            id: "SOP-051",
            title: "P&C Response Center",
            detail:
              "Define triage, ownership, escalation, and incident communication, and mirror that coverage for Salik–LIVA and Motor.",
          },
          {
            id: "SOP-052",
            title: "L1 / L2 / L3 Support Ownership",
            detail:
              "L1 triages, L2 supports the application, L3 engineers the fix. Name on-call owners and escalation contacts.",
          },
          {
            id: "SOP-053",
            title: "Incident Severity & SLA Management",
            detail:
              "Set severity from business impact. Track response time, restoration time, availability, and business-transaction success against the SLO.",
          },
          {
            id: "SOP-054",
            title: "Business Transaction Monitoring",
            detail:
              "Monitor quote generation, premium calculation, payment, policy issuance, document generation, and external insurer API success.",
          },
          {
            id: "SOP-055",
            title: "Incident Communication SOP",
            detail:
              "Notify stakeholders, send updates, state the time of the next update, and confirm resolution.",
          },
          {
            id: "SOP-056",
            title: "Root Cause Analysis",
            detail:
              "Record timeline, impact, root cause, contributing factors, corrective actions, and action owners.",
          },
          {
            id: "SOP-057",
            title: "Problem Management",
            detail:
              "Track recurring incidents apart from single tickets, and carry them through to a permanent fix.",
          },
          {
            id: "SOP-058",
            title: "Performance & Capacity Monitoring",
            detail:
              "Keep baseline response times, load-test evidence, capacity forecasts, bottleneck analysis, and cloud cost anomalies.",
          },
          {
            id: "SOP-059",
            title: "Shift Handover & Support Runbooks",
            detail:
              "Hand over open incidents, pending deployments, and unresolved alerts. Maintain troubleshooting steps, recovery procedures, and known workarounds.",
          },
        ],
      },
      {
        id: "07",
        layer: "Common",
        title: "Security, risk & compliance",
        summary:
          "Security is a separate gate before production, with a named approver for exceptions. Customer data, policy documents, financial transactions, and insurer obligations are in scope.",
        processes: [
          {
            id: "SOP-060",
            title: "Access Management",
            detail:
              "Role-based access, least privilege, MFA, periodic access reviews, and immediate offboarding.",
          },
          {
            id: "SOP-061",
            title: "Secrets & Credential Management",
            detail:
              "Keep credentials out of source code. Store them in managed secrets and rotate them.",
          },
          {
            id: "SOP-062",
            title: "Vulnerability Management",
            detail:
              "Run dependency scanning, SAST, and DAST. Remediate inside deadlines set by severity, then verify the fix.",
          },
          {
            id: "SOP-063",
            title: "Infrastructure Security",
            detail:
              "Network restrictions, secure configuration, firewall rules, and controlled production access.",
          },
          {
            id: "SOP-064",
            title: "Data Protection",
            detail:
              "Encrypt data in transit and at rest. Mask it in non-production. Control exports of customer, policy, and payment data.",
          },
          {
            id: "SOP-065",
            title: "Audit Logging",
            detail:
              "Centralize logs for administrative actions, access changes, and sensitive operations.",
          },
          {
            id: "SOP-066",
            title: "API Security",
            detail:
              "Require authentication, authorization, rate limiting, input validation, and abuse protection.",
          },
          {
            id: "SOP-067",
            title: "Security Incident Response",
            detail:
              "Detect, contain, investigate, notify, and recover. Keep the evidence with the incident record.",
          },
          {
            id: "SOP-068",
            title: "Third-party Security",
            detail:
              "Review external APIs, vendors, credentials, access scope, integration risk, and insurer contractual obligations.",
          },
          {
            id: "SOP-069",
            title: "Security Review & Evidence",
            detail:
              "Pass a security gate before production. Retain approvals, access reviews, vulnerability reports, and release security evidence.",
          },
        ],
      },
      {
        id: "08",
        layer: "Common",
        title: "Disaster recovery & business continuity",
        summary:
          "Cover infrastructure failure, data corruption, region outage, compromised credentials, and unavailable third parties. The plan is complete when a drill restores the service and verifies data integrity within the agreed RTO and RPO.",
        processes: [
          {
            id: "SOP-070",
            title: "Disaster Recovery Plan",
            detail:
              "Document recovery procedures and the people responsible for each critical service.",
          },
          {
            id: "SOP-071",
            title: "RTO & RPO Definition",
            detail:
              "Agree recovery time and recovery point objectives with the business for every critical service.",
          },
          {
            id: "SOP-072",
            title: "Backup & Restoration SOP",
            detail:
              "Define backup policy, retention, and encryption. Count a backup as ready only after a restoration test has succeeded.",
          },
          {
            id: "SOP-073",
            title: "Infrastructure Recovery",
            detail:
              "Keep infrastructure-as-code and the steps to reconstruct each environment.",
          },
          {
            id: "SOP-074",
            title: "Regional Outage & Failover",
            detail:
              "Document primary and secondary region or environment arrangements and the failover procedure.",
          },
          {
            id: "SOP-075",
            title: "Third-party Outage Handling",
            detail:
              "Define degraded-mode operation, retries, and reconciliation when an insurer API or payment provider is unavailable.",
          },
          {
            id: "SOP-076",
            title: "DR Drill & Evidence",
            detail:
              "Run recovery exercises on a set interval. Record recovery time, data-integrity results, gaps, and corrective actions.",
          },
          {
            id: "SOP-077",
            title: "Business Continuity Communication",
            detail:
              "Maintain the communication tree and the escalation matrix, and use them in drills.",
          },
        ],
      },
      {
        id: "09",
        layer: "Common",
        title: "Business requirements & product governance",
        summary:
          "Every request becomes a ticket. A named business owner approves testable acceptance criteria before build. Configuration, including AI-assisted drafts, is versioned and authorized before it is published.",
        processes: [
          {
            id: "SOP-078",
            title: "Requirement Intake Process",
            detail:
              "Receive every request through one channel or portal, then convert it into a trackable ticket.",
          },
          {
            id: "SOP-079",
            title: "Requirement Documentation SOP",
            detail:
              "Use a standard BRD, FRD, or user-story template, with version control and approval history.",
          },
          {
            id: "SOP-080",
            title: "Business Analysis & Impact Assessment",
            detail:
              "State the problem, objective, stakeholders, scope, exclusions, and outcome. Identify affected modules, APIs, products, policies, reports, and integrations.",
          },
          {
            id: "SOP-081",
            title: "Acceptance Criteria & Approval",
            detail:
              "Write testable acceptance criteria and business rules. A named product or business owner approves them before implementation.",
          },
          {
            id: "SOP-082",
            title: "Requirement Change Control",
            detail:
              "Any scope change after sprint commitment needs an impact assessment and approval.",
          },
          {
            id: "SOP-083",
            title: "Product Configuration Governance",
            detail:
              "Manage the configuration lifecycle, effective dates, change history, approval status, and rollback or retirement.",
          },
          {
            id: "SOP-084",
            title: "Product Configuration Testing",
            detail:
              "Validate configurations with representative scenarios before they are published or released.",
          },
          {
            id: "SOP-085",
            title: "Business UAT & Sign-off",
            detail:
              "Record UAT results, open exceptions, acceptance, and release authorization.",
          },
          {
            id: "SOP-086",
            title: "Requirement Traceability",
            detail:
              "Link requirement, development ticket, pull request, test cases, defects, and release.",
          },
          {
            id: "SOP-087",
            title: "AI-assisted Product Configuration",
            detail:
              "Draft forms, validation, rating formulas, underwriting rules, and documents from approved specifications. A human product owner or authorized underwriter approves anything business-critical before publication.",
          },
        ],
      },
      {
        id: "10",
        layer: "Common",
        title: "Architecture & technical governance",
        summary:
          "Review new modules, integrations, shared components, and multi-tenant boundaries before build. Record the decision, the non-functional requirements, and how old APIs and product versions retire.",
        processes: [
          {
            id: "SOP-088",
            title: "Architecture Review",
            detail:
              "Review new modules, integrations, and major design changes before implementation is committed.",
          },
          {
            id: "SOP-089",
            title: "API & Integration Standards",
            detail:
              "Use common contracts, error handling, and versioning across platforms.",
          },
          {
            id: "SOP-090",
            title: "Database & Data Model Review",
            detail:
              "Review schema design, migrations, and data-integrity expectations before they ship.",
          },
          {
            id: "SOP-091",
            title: "Non-functional Requirements",
            detail:
              "Specify scalability, latency, availability, and resilience, and test against them.",
          },
          {
            id: "SOP-092",
            title: "Multi-tenant Architecture Controls",
            detail:
              "Enforce tenant isolation and access boundaries in design and in review.",
          },
          {
            id: "SOP-093",
            title: "Technical Decision Records",
            detail:
              "Record the decision, the rationale, the date, and the systems it affects.",
          },
          {
            id: "SOP-094",
            title: "Dependency & Upgrade Management",
            detail:
              "Keep an approved technology list, supported versions, and a path for vulnerability remediation.",
          },
          {
            id: "SOP-095",
            title: "Architecture & Technical Debt Review",
            detail:
              "Review recurring risk, deprecation, logging, tracing, configuration, observability, and remediation priority on a set cadence.",
          },
        ],
      },
      {
        id: "11",
        layer: "Governance",
        title: "People, ownership & engineering effectiveness",
        summary:
          "Publish a primary and backup owner for every critical module. Judge effectiveness by predictability, quality, and collaboration, adjusted for complexity, support duty, and time spent reviewing.",
        processes: [
          {
            id: "SOP-096",
            title: "Module Ownership Matrix",
            detail:
              "Name the primary owner, the backup owner, and the escalation contact for each critical module.",
          },
          {
            id: "SOP-097",
            title: "Engineering Effectiveness Review",
            detail:
              "Review quality, predictability, cycle time, review participation, defect prevention, and production-defect contribution. Adjust for complexity and support load.",
          },
          {
            id: "SOP-098",
            title: "Skills & Training Plan",
            detail:
              "Maintain a skill matrix, close technical gaps, and plan cross-training where a module has a single specialist.",
          },
          {
            id: "SOP-099",
            title: "Onboarding SOP",
            detail:
              "Provision access, set up the environment, teach the standards, and assign the first owned work.",
          },
          {
            id: "SOP-100",
            title: "Exit & Handover SOP",
            detail:
              "Revoke access, transfer knowledge, and reassign ownership before the person leaves.",
          },
          {
            id: "SOP-101",
            title: "Workload & Support Allocation",
            detail:
              "Balance feature delivery, code review, and production support so operational duty stays visible.",
          },
          {
            id: "SOP-102",
            title: "Knowledge Sharing",
            detail:
              "Run technical sessions and keep runbooks and lessons learned current.",
          },
          {
            id: "SOP-103",
            title: "SOP Compliance Audit",
            detail:
              "Check evidence, exceptions, and gaps. Raise corrective actions when the same miss repeats.",
          },
          {
            id: "SOP-104",
            title: "Continuous Improvement Review",
            detail:
              "Close retrospective actions, name recurring bottlenecks, and measure whether the change improved delivery.",
          },
        ],
      },
    ],
    platforms: [
      {
        code: "PNC",
        name: "P&C",
        tone: "pnc",
        kicker: "Product Factory",
        summary:
          "Configuration changes rating, underwriting, documents, reinsurance, and the quote-to-policy path. Treat a product version as a controlled release.",
        validates:
          "Rating formulas, premium calculations, referral rules, authority limits, policy wording, document generation, and approval workflows.",
        sops: [
          {
            id: "PNC-01",
            title: "Product onboarding and configuration lifecycle",
            detail: "Take a product from request through configuration, test, approval, publication, and retirement.",
          },
          {
            id: "PNC-02",
            title: "Rating engine validation and premium reconciliation",
            detail: "Check formulas and reconcile calculated premium to the expected result.",
          },
          {
            id: "PNC-03",
            title: "Underwriting rules, referrals and authority limits",
            detail: "Prove referral triggers and the authority under which a risk can be accepted.",
          },
          {
            id: "PNC-04",
            title: "Quote-to-policy lifecycle and endorsements",
            detail: "Cover quote, bind, issue, endorsement, and the status changes between them.",
          },
          {
            id: "PNC-05",
            title: "Reinsurance calculations and treaty validation",
            detail: "Validate treaty application and reinsurance calculations before release.",
          },
          {
            id: "PNC-06",
            title: "Policy documents, audit trails and version history",
            detail: "Control wording, generated documents, and a traceable history of what changed.",
          },
          {
            id: "PNC-07",
            title: "Multi-tenant data isolation and access controls",
            detail: "Keep tenant data and product access inside the agreed boundary.",
          },
        ],
      },
      {
        code: "SLV",
        name: "Salik–LIVA",
        tone: "slv",
        kicker: "Integration platform",
        summary:
          "Work crosses organizations. Consent, lead data, the LIVA API, and reconciliation have to agree, including when a call fails or is retried.",
        validates:
          "Consent, lead creation, data mapping, API contracts, retries, idempotency, timeouts, failed quotes, and reconciliation.",
        sops: [
          {
            id: "SLV-01",
            title: "Consent and customer data lifecycle",
            detail: "Capture, use, retain, and honor withdrawal of consent.",
          },
          {
            id: "SLV-02",
            title: "Salik lead ingestion and data reconciliation",
            detail: "Ingest leads, map fields, and reconcile them to the source.",
          },
          {
            id: "SLV-03",
            title: "LIVA API health and failure management",
            detail: "Detect API degradation and route failures to a named owner.",
          },
          {
            id: "SLV-04",
            title: "Retry, timeout, duplicate and idempotency controls",
            detail: "Retry safely so a duplicate request cannot create a second quote or policy.",
          },
          {
            id: "SLV-05",
            title: "Quote, payment and policy issuance reconciliation",
            detail: "Match quotes, payments, and issued policies, and explain every mismatch.",
          },
          {
            id: "SLV-06",
            title: "External IP whitelisting and certificate management",
            detail: "Control allow-lists and renew certificates before expiry becomes an incident.",
          },
          {
            id: "SLV-07",
            title: "Cross-organization incident escalation",
            detail: "Name the contacts and the path between organizations when production is affected.",
          },
        ],
      },
      {
        code: "MTR",
        name: "Motor",
        tone: "mtr",
        kicker: "Motor platform",
        summary:
          "Accuracy depends on vehicle data, the stage at which fields are required, fleet volume, and each insurer’s rules. Failed rows need a recovery path.",
        validates:
          "Vehicle normalization, mandatory fields at the correct journey stage, fleet uploads, rating accuracy, insurer integrations, and policy issuance reconciliation.",
        sops: [
          {
            id: "MTR-01",
            title: "Vehicle and fleet upload validation",
            detail: "Check file structure, mandatory fields, and reject invalid fleet records with a reason.",
          },
          {
            id: "MTR-02",
            title: "AI-assisted data cleansing and enrichment",
            detail: "Use assisted cleansing only with human confirmation before the data is rated.",
          },
          {
            id: "MTR-03",
            title: "Vehicle rating and premium accuracy",
            detail: "Compare rating output with expected premium on representative vehicles.",
          },
          {
            id: "MTR-04",
            title: "Insurer-specific rules and API integration",
            detail: "Apply each insurer’s rules, payloads, and failure handling.",
          },
          {
            id: "MTR-05",
            title: "Policy issuance and document validation",
            detail: "Match the issued policy and documents to the accepted quote.",
          },
          {
            id: "MTR-06",
            title: "Bulk processing and failed-record handling",
            detail: "Measure throughput, contain partial failure, and provide a path to correct failed rows.",
          },
          {
            id: "MTR-07",
            title: "Fleet quote and policy reconciliation",
            detail: "Reconcile fleet quotes to policies, premiums, and rejected vehicles.",
          },
        ],
      },
    ],
  };
})(typeof window !== "undefined" ? window : globalThis);
