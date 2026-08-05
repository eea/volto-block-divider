# syntax=docker/dockerfile:1
ARG VOLTO_VERSION=19
FROM plone/frontend-builder:${VOLTO_VERSION}

ARG ADDON_NAME
ARG ADDON_PATH
ENV HOST="0.0.0.0"
ENV ADDON_NAME=${ADDON_NAME}

USER root
RUN apt-get update -q \
    && apt-get install -qy --no-install-recommends \
       chromium xvfb \
    && rm -rf /var/lib/apt/lists/*
USER node

COPY --chown=node:node ./package.json /app/packages/${ADDON_PATH}/package.json
RUN --mount=type=cache,id=pnpm,target=/app/.pnpm-store,uid=1000 \
    pnpm --config.auto-install-peers=false add --workspace-root "${ADDON_NAME}@workspace:*"
RUN pnpm --filter @plone/registry build

COPY --chown=node:node ./ /app/packages/${ADDON_PATH}/
COPY --chown=node:node ./volto.config.js /app/volto.config.js

ENTRYPOINT ["pnpm"]
CMD ["start"]
