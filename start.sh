export HOSTED_PLUGIN=/projects/theia_scripts/test-open-file
cd /projects/theia_scripts/test-open-file &&
yarn && \
cd /projects/theia/examples/browser/ && \
export CHE_PROJECTS_ROOT=/projects/theia_dev && \
mkdir -p /projects/theia_dev && \
yarn start --hostname=0.0.0.0 --port=3030 /projects/theia_dev

