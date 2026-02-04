
import { Project, MobileApp } from './types';

export const AUTOMATION_PROJECTS: Project[] = [
  {
    id: 'lead-qual',
    title: 'Automated AI Lead Qualification & Routing',
    role: 'Automation Architect',
    videoUrl: "https://www.loom.com/share/2d71b84e8eed483a9a48af3b07b2b48b",
    tools: ['Make.com', 'Google Sheets', 'OpenAI (API)', 'Slack'],
    challenge: 'Sales teams waste time on unqualified leads; manual sorting causes slow response times.',
    solution: 'Built a Make.com scenario that intercepts leads, uses GPT-4 to analyze sentiment/intent, and routes "High Intent" leads to Slack immediately while sending low intent leads to a nurture sheet.',
    workflow: [
      { label: 'Trigger', description: 'Google Form/Typeform "Lead Capture" intercepts new submissions in real-time.' },
      { label: 'Enrichment', description: 'OpenAI node analyzes message sentiment, intent, and lead potential using custom prompting.' },
      { label: 'Routing', description: 'Router Node filters by intent score: If "High", triggers urgent Slack notification to #sales-urgent. If "Low/Medium", appends to Google Sheet nurture list.' }
    ],
    color: 'blue'
  },
  {
    id: 'onboarding',
    title: 'Touchless Client Onboarding',
    role: 'Integration Specialist',
    videoUrl: "https://www.loom.com/share/e85a662893584c08b17433a0d2e02af4",
    tools: ['Zapier', 'Stripe', 'Google Drive', 'Gmail', 'Trello/Asana'],
    challenge: 'Manual onboarding is error-prone and slow, taking approximately 45 minutes per client.',
    solution: 'A multi-step Zapier workflow triggered by payment that automates contracts, folders, and project boards. Reduced human intervention time to 30 seconds.',
    workflow: [
      { label: 'Trigger', description: 'Stripe "New Payment" event identifies successful checkout.' },
      { label: 'Action 1', description: 'Automatically create a dedicated Google Drive Folder named "Client - [Name]".' },
      { label: 'Action 2', description: 'Generate a customized Service Agreement from a Google Doc Template using client metadata.' },
      { label: 'Action 3', description: 'Create a new Trello/Asana card with a predefined onboarding checklist.' },
      { label: 'Action 4', description: 'Send a Gmail draft or email with the contract link and "Welcome" instructions.' }
    ],
    color: 'green'
  },
  {
    id: 'content-engine',
    title: 'End-to-End Content Repurposing Engine',
    role: 'AI Engineer',
    tools: ['n8n (Self-hosted)', 'YouTube API', 'OpenAI (Whisper/GPT)', 'Notion', 'WordPress'],
    challenge: 'Creating cross-platform content (blogging from video) is resource-intensive and manual.',
    solution: 'Self-hosted n8n workflow that monitors media channels, transcribes audio, and uses LLMs to write SEO-optimized blog posts.',
    workflow: [
      { label: 'Trigger', description: 'Periodic check of YouTube channel via API for new video uploads.' },
      { label: 'Transcription', description: 'Whisper API processes the audio stream to generate a high-accuracy transcript.' },
      { label: 'Processing', description: '"Split In Batches" node handles long transcripts, sending segments to OpenAI for summarization and blog structure creation.' },
      { label: 'Drafting', description: 'Automatically pushes the generated, SEO-optimized post to WordPress as a "Draft" for final review.' }
    ],
    color: 'blue'
  },
  {
    id: 'crm-erp',
    title: 'Fully Automated Order Management & CRM Ecosystem',
    role: 'Automation Architect',
    videoUrl: "https://www.loom.com/share/d48b87c7f5ef4908873bbb6e9ac3b86f",
    tools: ['Make.com', 'Airtable (Interface & Database)', 'Jotform', 'Gmail'],
    challenge: 'Managing orders manually leads to data duplication, missed payment verifications, and disjointed customer communication.',
    solution: 'Engineered a full-stack low-code ERP that handles customer deduplication, enforces conditional logistics logic, and automates financial reconciliation and reporting.',
    workflow: [
      { label: 'Smart Input', description: 'Jotform with UI logic dynamically hides/shows delivery address fields based on "Pickup" vs. "Delivery" selection.' },
      { label: 'CRM Routing', description: 'Make.com queries Airtable: If New Customer, creates Record + Links Order. If Existing, links Order to existing Record to prevent duplication.' },
      { label: 'Status Logic', description: 'Router checks Payment Status. If "No" → Status set to Pending (Sends Bank Details). If "Yes" → Status set to Processing.' },
      { label: 'Communication Loop', description: 'Checks "Email Opt-in". Sends "Welcome" to new users immediately, waits 5 minutes, then sends "Order Confirmation".' },
      { label: 'Admin Ops', description: 'Scheduled automation runs daily at 9:00 AM → Aggregates Airtable data -> Sends Summary Report (Total Orders, Status Breakdown) to management.' }
    ],
    color: 'green'
  },
  {
    id: 'slack-bot',
    title: 'Slack Code Explanation Bot (Internal Tool)',
    role: 'AI Tool Developer',
    tools: ['Slack API (Bolt.js)', 'OpenAI API (GPT-4)', 'AWS Lambda/Replit', 'Webhooks'],
    challenge: 'Junior developers frequently get stuck on complex legacy code, causing bottlenecks and wasting senior mentors\' time.',
    solution: 'Built an interactive Slack bot that acts as an "On-Demand Mentor." It listens for mentions in engineering channels, analyzes code snippets, and returns educational breakdowns.',
    workflow: [
      { label: 'Event Listener', description: 'Slack Events API listens for app_mention events (@CodeBot) in specified channels.' },
      { label: 'Extraction', description: 'Regex parser isolates the code block or GitHub URL from the user\'s message payload.' },
      { label: 'AI Processing', description: 'Payload sent to OpenAI with system prompt: "Act as a Senior Engineer. Explain this logic simply and highlight potential bugs."' },
      { label: 'Delivery', description: 'Formats the AI response into Slack Block Kit (Markdown) and posts it as a threaded reply.' }
    ],
    color: 'blue'
  }
];

export const MOBILE_APPS: MobileApp[] = [
  {
    id: '2easy',
    name: '2Easy',
    tagline: 'Fitness Made Simple',
    overview: 'A streamlined app to remove friction from workout tracking and scheduling.',
    features: [
      'Workout Tracking: Input sets/reps without complex menus. Auto-highlight PRs.',
      'Gym Scheduling: Real-time calendar & one-tap booking.',
      'Membership: Digital QR ID for access & subscription management.'
    ],
    techStack: ['Flutter', 'Firebase', 'MongoDB', 'Riverpod', 'OAuth 2.0'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600&h=1200'
  }
];
