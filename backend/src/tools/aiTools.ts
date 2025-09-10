export const aiTools = [
  {
    type: "function" as const,
    name: "get_backend_info",
    description:
      "Retrieves details about the backend database structure, tables, and relationships from the backend documentation.",
    parameters: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "The user's question about the backend.",
        },
      },
      required: ["message"],
    },
    strict: true,
  },
  {
    type: "function" as const,
    name: "get_git_clone_instructions",
    description:
      "Provides instructions or answers questions about cloning the repository using Git, based on the cloneWithGit documentation.",
    parameters: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description:
            "The user's question about cloning the repository with Git.",
        },
      },
      required: ["message"],
    },
    strict: true,
  },
  {
    type: "function" as const,
    name: "get_gitkraken_clone_instructions",
    description:
      "Provides instructions or answers questions about cloning the repository using GitKraken, based on the cloneWithGitKraken documentation.",
    parameters: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description:
            "The user's question about cloning the repository with GitKraken.",
        },
      },
      required: ["message"],
    },
    strict: true,
  },
  {
    type: "function" as const,
    name: "get_project_structure_info",
    description:
      "Provides details or answers questions about the overall project structure, based on the projectStructure documentation.",
    parameters: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "The user's question about the project structure.",
        },
      },
      required: ["message"],
    },
    strict: true,
  },
  {
    type: "function" as const,
    name: "get_start_ticket_info",
    description:
      "Provides details or answers questions about starting your first ticket, based on the startTicket documentation.",
    parameters: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "The user's question about starting a ticket.",
        },
      },
      required: ["message"],
    },
    strict: true,
  },
];
